---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
# Technology Stack

**Analysis Date:** 2026-10-30

## Languages

**Primary:**

- HTML5 (Semantic) - Page structure, OpenGraph / Twitter meta tags, JSON-LD structured data (`index.html`)
- Modern CSS (CSS3) - Layout, variables/tokens, component styling, animations, and responsive breakpoints (`style.css`, `css/*.css`)
- JavaScript (ES6+ Native Modules) - Application logic, DOM manipulation, animations, games, and UI state (`script.js`, `js/*.js`)

**Secondary:**

- XML - Search engine sitemap protocol (`sitemap.xml`)
- Plaintext / Markdown - LLM scraper documentation (`llms.txt`, `README.md`) and crawler instructions (`robots.txt`)

## Runtime

**Environment:**

- Evergreen Web Browsers (Chrome, Firefox, Safari, Edge) supporting native ES Modules (`type="module"`), CSS Custom Properties, and `IntersectionObserver`.

**Package Manager:**

- None / Zero-dependency architecture.
- Lockfile: missing (deliberate zero-npm-dependency build design).

## Frameworks

**Core:**

- Vanilla Web Standards - No JavaScript framework (React/Vue/Svelte omitted in favor of lightweight vanilla DOM APIs for maximum PageSpeed and near-instant time-to-interactive).

**Testing:**

- Not detected / None configured (Unit and E2E testing frameworks are currently absent; manual visual and browser testing used).

**Build/Dev:**

- Zero Build Step - Runs directly from disk or static web server without bundlers (Vite, Webpack, Rollup) or transpilers (Babel, TypeScript). Modular CSS is assembled via native `@import` statements in `style.css`, and JS via native ES module imports in `script.js`.

## Key Dependencies

**Critical:**

- Native Browser Web APIs:
  - `IntersectionObserver` (`js/core.js`, `js/stats.js`): Triggers skill bar fill animations and statistical counters on scroll.
  - `window.matchMedia('(prefers-reduced-motion: reduce)')` (`js/burst.js`, `js/playground.js`): Accessible animation suppression.
  - `window.scrollTo({ behavior: 'smooth' })` (`js/core.js`): Smooth anchor navigation to top of page.
  - `document.addEventListener('visibilitychange')` (`js/core.js`): Dynamic favicon swap and title modification on tab switch.

**Third-Party CDN Assets (Non-blocking):**

- Google Fonts (`index.html`): Space Grotesk (`wght@400;600;700`) & Syne (`wght@700;800;900`) loaded asynchronously via Google Fonts CDN.

## Configuration

**Environment:**

- Static Hosting / Serverless Static CDN (e.g., GitHub Pages, Cloudflare Pages, Vercel, or custom server).
- Key configs: `robots.txt` for AI/crawler permission control and `sitemap.xml` for search index discovery.

**Build:**

- No build configuration files (`tsconfig.json`, `vite.config.js`, or `webpack.config.js` not needed).

## Platform Requirements

**Development:**

- Any static HTTP server (e.g., Python `http.server`, Node `npx serve`, VS Code Live Server, or opening files directly via browser).
- Git for version control.

**Production:**

- Any static file hosting provider (GitHub Pages, Cloudflare Pages, Netlify, Vercel, Nginx, Apache, or S3/CloudFront).
- Domain: `https://yallahhabibi.is-a.dev/` configured with HTTPS/TLS.

---

*Stack analysis: 2026-10-30*
