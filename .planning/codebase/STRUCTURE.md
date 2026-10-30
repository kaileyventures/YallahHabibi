---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
# Codebase Structure

**Analysis Date:** 2026-10-30

## Directory Layout

```text
YallahHabibi/
├── .planning/                  # GSD planning and codebase intelligence directory
│   └── codebase/              # Structured codebase maps and reference documents
├── css/                       # Modular CSS stylesheets by concern
│   ├── animations.css         # Keyframes, confetti, bugs, and modal transitions
│   ├── components.css         # Neo-brutalist buttons, cards, tags, and badges
│   ├── layout.css             # Page wrappers, ticker, hero layout, and footer grid
│   ├── responsive.css         # Media queries, viewport scaling, touch targets
│   └── variables.css          # Design tokens, CSS variables, resets, focus rings
├── js/                        # Modular ES6+ JavaScript modules
│   ├── burst.js               # Physics-based particle explosion engine
│   ├── core.js                # Core interactions (runaway button, estimator, logo)
│   ├── playground.js          # Bug hunting mini-game, QA certificate modal, cookies
│   ├── quotes.js              # Polygraph Lie Detector and excuse confessions
│   ├── stats.js               # IntersectionObserver smooth number counters
│   └── vibes.js               # 50 sarcastic startup pitch roasts deck
├── index.html                 # Main HTML5 semantic page document
├── style.css                  # Master CSS orchestrator (@import bundle)
├── script.js                  # Main JS entrypoint and module boots
├── favicon.svg                # Dynamic SVG favicon
├── favicon.ico                # Fallback ICO favicon
├── favicon-48.png             # 48x48 PNG favicon
├── icon-192.png               # 192x192 PWA / web app manifest icon
├── logo.png                   # High-res project brand logo banner
├── og-image.jpg               # OpenGraph and social share preview card (1200x630)
├── robots.txt                 # Search engine and AI bot indexing permissions
├── sitemap.xml                # XML sitemap for SEO discovery
├── llms.txt                   # Structured documentation for AI search agents
└── README.md                  # Developer and repository documentation
```

## Directory Purposes

**`css/`:**

- Purpose: Contains all CSS stylesheets decomposed into granular concerns.
- Contains: Pure CSS files without preprocessor syntax (SCSS/LESS).
- Key files: `css/variables.css` (design tokens), `css/components.css` (UI elements), `css/responsive.css` (breakpoints).

**`js/`:**

- Purpose: Contains all client-side JavaScript business logic and UI interactive modules.
- Contains: Native ES Modules with `export` and `import` statements.
- Key files: `js/burst.js` (shared particle system), `js/core.js` (core DOM utilities), `js/playground.js` (interactive games).

**`.planning/`:**

- Purpose: GSD workflow management, roadmaps, and codebase maps.
- Contains: Markdown specifications and analysis records.

## Key File Locations

**Entry Points:**

- `index.html`: Main HTML entry point containing page layout and SEO metadata.
- `style.css`: Primary stylesheet loaded by `<link rel="stylesheet" href="style.css">`.
- `script.js`: Primary JavaScript module loaded by `<script type="module" src="script.js">`.

**Configuration:**

- `css/variables.css`: Global color palette (`--pink`, `--mustard`, `--mint`, `--ink`, `--paper`, `--red`), fonts, and base resets.
- `robots.txt`: Crawler policy defining crawl rules for Google, Bing, GPTBot, ClaudeBot, Perplexity, and others.
- `sitemap.xml`: Canonical indexing list with priority and change frequencies.
- `llms.txt`: Machine-readable portfolio profile and reference guidelines for LLMs.

**Core Logic:**

- `js/burst.js`: Particle velocity calculation and DOM insertion/removal.
- `js/core.js`: Shy button bounding box calculations and viewport observers.
- `js/playground.js`: Dynamic DOM template generation for the sarcastic QA certificate modal.
- `js/vibes.js`: Non-repeating randomized array selection algorithm.

**Asset Files:**

- `og-image.jpg`: 1200x630 social card used in OpenGraph and Twitter cards.
- `logo.png`: High-resolution official logo banner.
- `favicon.svg`: Vector icon supporting dynamic color changes and tab switch states.

## Naming Conventions

**Files:**

- HTML/CSS/JS files: lowercase kebab-case or single words (e.g., `responsive.css`, `playground.js`, `index.html`).
- GSD documentation: UPPERCASE.md (e.g., `STACK.md`, `ARCHITECTURE.md`).

**Directories:**

- Lowercase single words or kebab-case (e.g., `css`, `js`, `.planning`).

**CSS Selectors:**

- BEM-inspired and functional kebab-case classes (e.g., `.press-card`, `.btn-primary`, `.qa-modal-backdrop`, `.footer-roast-grid`).
- State helper classes: single lowercase words (e.g., `.on`, `.sel`, `.fly`, `.spin`).

**JavaScript Identifiers:**

- Functions: camelCase prefixed with action verbs (e.g., `initCore`, `initPlayground`, `burst`, `flee`, `getCertData`).
- Constants / arrays: camelCase or UPPER_SNAKE_CASE (e.g., `certTiers`, `pressReactions`).

## Where to Add New Code

**New Visual Component:**

- Markup: Add semantic HTML tags inside the appropriate `<section>` in `index.html`.
- Styles: Add component styling to `css/components.css` using CSS custom properties from `css/variables.css`.
- Responsive overrides: If layout wraps unexpectedly on screens < 768px, add media query rules to `css/responsive.css`.

**New Interactive Feature or Mini-Game:**

- Create a new module file in `js/<feature-name>.js` exporting an initialization function `export function init<FeatureName>()`.
- Import and execute the function in `script.js`.
- If keyframe animations are required, define them in `css/animations.css`.

**New Animation or Visual Effect:**

- Place `@keyframes` definitions and transition classes in `css/animations.css`.
- Ensure you respect `@media (prefers-reduced-motion: reduce)` rules by adding appropriate overrides.

**New External Service or AI Guidance:**

- Update `llms.txt` and `robots.txt` if new crawlers or integrations are introduced.

## Special Directories

**`.planning/`:**

- Purpose: Stores GSD state, codebase maps, and planning specifications.
- Generated: Partially generated by GSD tools and agents.
- Committed: Yes, committed to version control to preserve project memory.

---

*Structure analysis: 2026-10-30*
