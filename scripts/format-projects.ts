#!/usr/bin/env tsx
/**
 * Batch formatter for project markdown drafts.
 * - Reads from temp_content_hold (Chinese filenames kept as-is)
 * - Normalizes headings for TOC (start at H2, clean fake headings)
 * - Rebuilds frontmatter (title/description/date/complexity, etc.)
 * - Fixes GFM tables to consistent pipe counts
 * - Outputs to src/content/projects with same basename unless --out-dir provided
 *
 * Safe by default: dry-run shows diff-like summary; no overwrite unless --write.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import remarkMath from "remark-math";
import GithubSlugger from "github-slugger";

type Options = {
  srcDir: string;
  outDir: string;
  write: boolean;
  dryRun: boolean;
  slugify: boolean;
};

const args = process.argv.slice(2);
const opt: Options = {
  srcDir: "temp_content_hold",
  outDir: "src/content/projects",
  write: false,
  dryRun: true,
  slugify: false,
};

args.forEach((arg) => {
  if (arg === "--write") opt.write = true;
  if (arg.startsWith("--out=")) opt.outDir = arg.replace("--out=", "");
  if (arg === "--no-dry-run") opt.dryRun = false;
  if (arg === "--slug") opt.slugify = true;
});

if (opt.write) opt.dryRun = false;

const files = fs
  .readdirSync(opt.srcDir)
  .filter((f) => f.endsWith(".md"));

if (files.length === 0) {
  console.error(`No markdown files found in ${opt.srcDir}`);
  process.exit(1);
}

const processor = unified()
  .use(remarkParse)
  .use(gfm)
  .use(remarkMath)
  .use(normalizeHeadings)
  .use(fixTables)
  .use(cleanPlaceholders)
  .use(autoLinkifyBareUrls)
  .use(remarkStringify, {
    bullet: "-",
    fences: true,
    listItemIndent: "one",
    // preserve math without over-escaping
    entities: "escape",
    fencedCodeMarker: "`",
  });

let changed = 0;

files.forEach((file) => {
  const srcPath = path.join(opt.srcDir, file);
  const raw = fs.readFileSync(srcPath, "utf-8");
  const parsed = matter(raw);
  const body = parsed.content.trim();

  // derive title from first heading or filename
  const { titleFromBody, bodyWithoutTitle } = extractTitle(body, file);

  const fm = buildFrontmatter(parsed.data, titleFromBody, bodyWithoutTitle);

  const processed = processor.processSync(bodyWithoutTitle);
  const newBody = String(processed).trim() + "\n";

  const output = matter.stringify(newBody, fm);

  const outName = opt.slugify
    ? buildSlugFilename(fm, file)
    : path.basename(file, ".md") + ".md";
  const outPath = path.join(opt.outDir, outName);

  const existing = fs.existsSync(outPath)
    ? fs.readFileSync(outPath, "utf-8")
    : "";

  if (output !== existing) {
    changed++;
    console.log(`→ ${file} -> ${path.relative(".", outPath)} ${opt.write ? "[written]" : "[preview]"}`);
    if (opt.write) {
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, output, "utf-8");
    }
  }
});

console.log(`Done. ${changed} file(s) ${opt.write ? "written" : "would change"}.`);

// --- helpers ---

function extractTitle(body: string, filename: string) {
  const lines = body.split(/\n/);
  const first = lines[0].trim();
  const h1Match = first.match(/^#\s+(.+)/);
  if (h1Match) {
    const title = stripFormatting(h1Match[1]);
    return { titleFromBody: title, bodyWithoutTitle: lines.slice(1).join("\n").trimStart() };
  }
  const fallback = stripFormatting(filename.replace(/\.md$/, ""));
  return { titleFromBody: fallback, bodyWithoutTitle: body };
}

function stripFormatting(text: string) {
  return text.replace(/^\*+|\*+$/g, "").replace(/^\s+|\s+$/g, "");
}

function buildSlugFilename(fm: Record<string, any>, original: string) {
  const s = new GithubSlugger();
  const baseTitle = fm.title || original.replace(/\.md$/, "");
  const projectSlug = s.slug(baseTitle);
  const year = (fm.date || "").slice(0, 4) || new Date().getFullYear().toString();
  return `${year}-${projectSlug}.md`;
}

function buildFrontmatter(data: Record<string, any>, title: string, body: string) {
  const fm = { ...data };
  if (!fm.title) fm.title = title;
  if (!fm.description) fm.description = extractDescription(body);
  if (!fm.date) fm.date = new Date().toISOString().slice(0, 10);
  if (fm.autodescription === undefined) fm.autodescription = false;
  if (fm.draft === undefined) fm.draft = false;
  if (!fm.complexity) fm.complexity = 2;
  if (fm.hideToc === undefined) fm.hideToc = false;
  return fm;
}

function extractDescription(body: string, max = 180) {
  const firstParagraph = body.split(/\n\s*\n/).find((p) => p.trim().length > 0) || "";
  const plain = firstParagraph
    .replace(/\(.*?\)\s*/g, "")
    .replace(/[#>*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plain.slice(0, max);
}

// remark plugin: normalize headings so TOC works (start at H2)
function normalizeHeadings() {
  return (tree: any) => {
    let firstHeadingDepth: number | null = null;
    const visit = (node: any) => {
      if (node.type === "heading") {
        if (firstHeadingDepth === null) firstHeadingDepth = node.depth;
        // demote H1 to H2, maintain relative depth but cap at 6
        if (node.depth === 1) node.depth = 2;
        if (node.depth < 2) node.depth = 2;
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}

// remark plugin: fix GFM tables (ensure equal cell counts)
function fixTables() {
  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === "table") {
        const width = Math.max(...node.children.map((r: any) => r.children.length));
        node.children.forEach((row: any) => {
          while (row.children.length < width) {
            row.children.push({ type: "tableCell", children: [{ type: "text", value: "" }] });
          }
        });
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}

// remove editorial placeholders like [此處應有圖表]
function cleanPlaceholders() {
  const regex = /\[(?:.*?圖.*?|.*?截圖.*?|.*?示意.*?)\]/i;
  return (tree: any) => {
    const visit = (node: any, index?: number, parent?: any) => {
      if (node.type === "paragraph" && node.children.length === 1 && node.children[0].type === "text") {
        const value = node.children[0].value as string;
        if (regex.test(value) && parent) {
          parent.children[index!] = {
            type: "html",
            value: `<!-- TODO: 補圖：${value.replace(/\\[|\\]/g, "")} -->`,
          };
        }
      }
      if (node.children) node.children.forEach((child: any, i: number) => visit(child, i, node));
    };
    visit(tree);
  };
}

// wrap bare URLs to markdown links using the URL as both text and href
function autoLinkifyBareUrls() {
  const urlRegex = /(https?:\/\/[^\s)]+)(?![^\[]*\])/g;
  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === "text" && urlRegex.test(node.value)) {
        node.value = node.value.replace(urlRegex, (m) => `[${m}](${m})`);
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}
