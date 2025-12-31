# Repository Guidelines

## Project Structure & Module Organization
- Core source lives in `src/`: pages in `src/pages` (Astro routes), UI in `src/components`, typed utilities in `src/lib`, global styles in `src/styles`, and content collections in `src/content`.
- Public/static assets sit in `public/`; built output lands in `dist/` after a build.
- Docs for customization and stack are under `docs/`; `.astro/` is a build cache and should stay untracked.

## Build, Test, and Development Commands
- Install dependencies: `npm install` (use Node 22 as noted in README).
- Start local dev server with hot reload: `npm run dev` (defaults to http://localhost:4321).
- Production build: `npm run build` (runs Astro static/SSR build).
- Search index after build: `npm run postbuild` (generates Pagefind index in `dist/`).
- Format source: `npm run format` (Prettier with Astro + Tailwind ordering).
- Cloudflare preview (if applicable): `npx wrangler dev` from repo root.

## Coding Style & Naming Conventions
- Use 2-space indents, LF endings, and UTF-8 (see `.editorconfig`).
- Prettier is the source of truth; run before committing. Keep JSX/Astro components in PascalCase (e.g., `HeroSection.astro`), utility modules in `camelCase` filenames, and markdown content files in `kebab-case`.
- Prefer Tailwind utility classes; co-locate component-specific styles alongside the component when SCSS is needed.

## Testing Guidelines
- No automated test suite yet; gate changes by ensuring `npm run build` succeeds and by spot-checking pages locally in both light and dark modes.
- When adding content, verify collection frontmatter matches `src/content/config` schemas to avoid build-time validation errors.

## Commit & Pull Request Guidelines
- Commits in history use concise, sentence-case summaries (e.g., “Configure for GitHub Pages deployment”). Aim for one focused concern per commit.
- For PRs, include: purpose/linked issue, a brief before/after summary, screenshots for visual changes (desktop + mobile), and confirmation that `npm run build`/`npm run postbuild` were run.

## Content & Assets
- Add new articles/docs under `src/content` using the existing collection folders and frontmatter patterns; place reusable images in `src/assets` and reference them relatively.
- Keep large media in `public/` and avoid committing generated `dist/` outputs.

## AI Collaboration Notes
- Record ongoing discussions and glossaries in `docs/DEV_NOTES.md` so future agents can trace past decisions before adding or revising glossary entries.
