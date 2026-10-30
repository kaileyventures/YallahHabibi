---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
# Codebase Concerns

**Analysis Date:** 2026-10-30

## Tech Debt

**Zero Automated Testing:**

- Issue: No unit, integration, or E2E tests exist (`0% automated test coverage`).
- Files: `js/*.js`, `index.html`
- Impact: Refactoring DOM element IDs or class names carries risk of silent regression without immediate failure notification.
- Fix approach: Introduce a lightweight test runner (such as Vitest or Playwright) to verify DOM queries and core math algorithms.

**Sequential CSS @import Waterfall:**

- Issue: `style.css` imports five modular stylesheets (`@import "css/variables.css"`, etc.).
- Files: `style.css`
- Impact: On high-latency mobile networks or HTTP/1.1 connections, nested `@import` declarations can trigger sequential waterfall requests before page render.
- Fix approach: Either link the five CSS files directly in `index.html` via `<link rel="stylesheet">` with `media` hints, or maintain the `@import` structure while enabling HTTP/2 or HTTP/3 server push on the hosting provider.

**Single Large HTML Document Shell:**

- Issue: `index.html` spans nearly 500 lines containing all SVG paths, markup, JSON-LD data, and copywriting in a single file.
- Files: `index.html`
- Impact: Updating copy or adding new sections increases file size and makes merge conflicts more frequent.
- Fix approach: Maintain clear section comment dividers; optionally adopt a zero-runtime static site generator (e.g. Astro or 11ty) if multi-page routing is needed in the future.

## Known Bugs

**Runaway Button Edge Viewport Clamping:**

- Symptoms: On very small mobile viewports (e.g., iPhone SE or narrow foldables < 360px width), the fleeing button coordinates can occasionally land close to the bottom toolbar or right screen edge.
- Files: `js/core.js` (`flee()`)
- Trigger: Rapid touches on narrow mobile devices.
- Workaround: Safe-area math clamps to `window.innerWidth - r.width - 20`, but dynamic browser chrome resize (address bar hide/show) can alter `innerHeight`.

**Particle Spawn Accumulation on Rapid Clicks:**

- Symptoms: Spamming the "Hire Me" button or excuse cards triggers multiple bursts of 24 DOM elements each.
- Files: `js/burst.js`
- Trigger: Fast multi-touch tapping.
- Workaround: Elements are removed via `setTimeout(..., 1200)`, but an active throttle or particle pool cap would guarantee 60fps on low-end mobile devices.

## Security Considerations

**Personal Privacy & Geographic Data Isolation:**

- Risk: Inadvertently leaking personal residency information, local regional names, or GPS coordinates in metadata, Schema structured data, or AI scraper manifests.
- Files: `index.html`, `llms.txt`
- Current mitigation: All geo tags (`geo.placename`, `geo.position`, `ICBM`, `geo.region`) and address fields have been completely removed. Brand positioning is strictly global/remote.
- Recommendations: Ensure future updates or SEO auditing tools do not re-introduce local address schemas or geo-targeting meta tags.

**Cross-Site Scripting (XSS) in Dynamic HTML Ingestion:**

- Risk: Dynamic innerHTML insertion in certificate modal or pitch roaster.
- Files: `js/playground.js`, `js/vibes.js`
- Current mitigation: User input in the pitch roaster is sanitized or rendered safely without executing unescaped script tags.
- Recommendations: Maintain strict string escaping whenever rendering dynamic user-provided strings.

## Performance Bottlenecks

**Font Preconnect & External Render-Blocking:**

- Problem: Space Grotesk and Syne fonts are loaded from Google Fonts CDN (`fonts.googleapis.com` / `fonts.gstatic.com`).
- Files: `index.html`
- Cause: DNS resolution, TLS handshake, and stylesheet download across external hosts.
- Improvement path: Self-host WOFF2 font files locally in a `fonts/` directory to eliminate external DNS lookups and achieve complete offline functionality.

**DOM Reflow on Rapid Animation Triggers:**

- Problem: Reading `logo.offsetWidth` to force reflow on logo spin (`js/core.js:77`).
- Files: `js/core.js`
- Cause: Synchronous layout recalculation forced by accessing `offsetWidth`.
- Improvement path: Toggle CSS animation classes using `animationend` event listener or Web Animations API (`element.animate()`).

## Fragile Areas

**DOM Selector Couplings:**

- Files: `js/core.js`, `js/playground.js`, `js/quotes.js`, `js/stats.js`, `js/vibes.js`
- Risk: JavaScript modules directly reference specific IDs and classes (`#yr`, `#runaway`, `#runmsg`, `#logo`, `#answer`, `.bar`, `.pick button`, `.press-card`, `[data-n]`). Renaming a class in `index.html` without updating the corresponding JS file will silently break interactions.
- Mitigation: Keep selectors centralized or use dedicated `data-js-*` hook attributes to decouple styling classes from behavioral logic.

---

*Concerns analysis: 2026-10-30*
