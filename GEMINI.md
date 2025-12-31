# Project Context: Astrogon / 鏈魂宗 (Customized)

## Overview
This project is a customized website built on the **Astrogon** template, a multi-purpose Astro theme. The user intends to customize it for "鏈魂宗" (Chain Soul Sect/Clan). It uses **Astro v5** as the core framework, integrated with **React** for interactive components and **Tailwind CSS** for styling. The project is configured for deployment on **Cloudflare**.

> **📝 Development Log:** Check `docs/DEV_NOTES.md` for the latest progress, to-do list, and architectural decisions. **Always read this file first to understand the current project status.**

## Tech Stack
*   **Framework:** Astro v5
*   **UI Libraries:** React, Tailwind CSS
*   **Content:** MDX (Markdown + JSX), Content Collections
*   **Search:** Pagefind (static search)
*   **Deployment:** Cloudflare Pages/Workers (`@astrojs/cloudflare` adapter)
*   **Math:** KaTeX (via `rehype-katex` and `remark-math`)

## Key Directory Structure
*   `src/content/`: **Crucial.** Contains all the actual content (Markdown/MDX files) for the site.
    *   `blog/`: Blog posts.
    *   `docs/`: Documentation pages.
    *   `home/`: Content for the homepage.
    *   `authors/`, `recipes/`, `poetry/`, etc.: Other specific content collections.
*   `src/pages/`: Defines the routes of the application.
    *   `index.astro`: The homepage entry point.
    *   `[...slug].astro`: Dynamic routes for content collections.
*   `src/components/`: Reusable UI components (Astro and React).
*   `src/content.config.ts`: Defines the schema (using Zod) and loaders for Content Collections. **Edit this when adding new content types.**
*   `astro.config.mjs`: Main Astro configuration, including integrations and the Cloudflare adapter.
*   `tailwind.config.js`: Tailwind CSS configuration.

## Building and Running
*   **Install Dependencies:** `npm install`
*   **Start Dev Server:** `npm run dev` (Runs on `http://localhost:4321`)
*   **Build for Production:** `npm run build`
*   **Post-Build (Search Index):** `npm run postbuild` (Runs `pagefind`)
*   **Format Code:** `npm run format`

## Development Conventions
*   **Content-Driven:** Most site content is managed via Markdown/MDX files in `src/content/`.
*   **Styling:** Use Tailwind CSS utility classes. Custom SCSS is available in `src/styles/`.
*   **Icons:** React Icons (`react-icons`) are available.
*   **Git:** The project has been detached from the original `astrogon` repo and initialized as a fresh Git repository.
*   **Deployment:** Configured for Cloudflare. If deploying elsewhere, the adapter in `astro.config.mjs` may need changing.

## User Preferences
*   **Locale:** Traditional Chinese (繁體中文).
*   **Goal:** Independent development and customization of the site.
*   **Name:** 鏈魂宗 (Chain Soul Sect/Clan).
