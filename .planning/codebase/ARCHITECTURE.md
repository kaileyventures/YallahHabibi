---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
<!-- refreshed: 2026-10-30 -->

# Architecture

**Analysis Date:** 2026-10-30

## System Overview

The Yallah Habibi web application is an ultra-fast, zero-build, modular static web application following Neo-Brutalist design principles and vanilla web standards. It is decoupled into two clean architectural layers: a modular Cascading Style Sheets (CSS) layer and a modular ECMAScript 6+ (ESM) interactive script layer.

```text
┌─────────────────────────────────────────────────────────────┐
│                 index.html (Semantic HTML5)                 │
│      [Hero] [Ticker] [Method Cards] [Press] [Playground]    │
├──────────────────────────────┬──────────────────────────────┤
│    style.css (CSS Bundler)   │  script.js (ESM Orchestrator)│
│  `style.css`                 │  `script.js`                 │
└──────────────┬───────────────┴──────────────┬───────────────┘
               │                              │
               ▼                              ▼
┌──────────────────────────────┐┌──────────────────────────────┐
│       Modular CSS Layer      ││      Modular ESM JS Layer    │
│  - `css/variables.css`       ││  - `js/core.js`              │
│  - `css/layout.css`          ││  - `js/playground.js`        │
│  - `css/components.css`      ││  - `js/vibes.js`             │
│  - `css/animations.css`      ││  - `js/quotes.js`            │
│  - `css/responsive.css`      ││  - `js/stats.js`             │
│                              ││  - `js/burst.js`             │
└──────────────────────────────┘└──────────────────────────────┘
               │                              │
               └──────────────┬───────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│        Browser Runtime (DOM, Web APIs & Canvas/SVG)         │
│  - IntersectionObserver, matchMedia, SessionStorage, Audio  │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| App Orchestrator | Boots modules on `DOMContentLoaded` event | `script.js` |
| Master Stylesheet | Aggregates modular CSS files via `@import` rules in cascade order | `style.css` |
| Design Tokens & Resets | Defines CSS custom properties (`--ink`, `--pink`, `--mustard`, `--mint`, `--paper`, `--red`), base typography, and focus outlines | `css/variables.css` |
| Macro Layouts | Grid layouts, sticky ticker banner, hero sections, and footer | `css/layout.css` |
| Micro Components | Neo-brutalist cards, method blocks, tags, buttons, radar pills, badges | `css/components.css` |
| Motion & Visual FX | Bug animations, keyframes, modal dialog styles, wobble, confetti pop CSS | `css/animations.css` |
| Viewport Adaptation | Media queries, safe-area insets, fluid grid column adjustments for mobile/tablet | `css/responsive.css` |
| Core Interactions | Runaway button physics, logo 360-spin, estimator, tab visibility guilt-trip | `js/core.js` |
| Confetti Engine | Particle explosion generator with velocity and rotation math | `js/burst.js` |
| Mini-Game & Modal | Crawling bug sniper game, tiered QA certificate modal generator, cookie banner | `js/playground.js` |
| Polygraph Lie Detector | Interactive developer excuse truth-detector with custom stamps and quotes | `js/quotes.js` |
| Sarcastic Roaster | 50-item shuffled-deck startup idea roaster with dynamic text insertion | `js/vibes.js` |
| Animated Counters | Smooth numeric acceleration on viewport intersection | `js/stats.js` |

## Pattern Overview

**Overall:** Modular Vanilla Separation of Concerns (SoC) with Event-Driven Orchestration.

**Key Characteristics:**

- **Zero Build Step:** Native browser ES modules loaded via `<script type="module" src="script.js">` in `index.html`.
- **Stateless Reactive DOM:** Event listeners attach directly to declarative DOM IDs and data-attributes (`data-n`, `data-t`, `data-lie`).
- **Progressive Enhancement:** Essential content is fully visible and readable without JavaScript; interactive games, counters, and playful micro-interactions enhance the experience when JS is enabled.

## Layers

**Markup Layer (`index.html`):**

- Purpose: Semantic structure, SEO meta descriptions, JSON-LD Schema graph, accessibility attributes.
- Location: `index.html`
- Contains: Valid HTML5 elements, inline SVG definitions, and Schema metadata.

**Styling Layer (`css/*.css`, `style.css`):**

- Purpose: Neo-brutalist theme enforcement (thick borders, high contrast colors, harsh drop-shadows, responsive breakpoints).
- Location: `style.css` (entry point) importing `css/variables.css`, `css/layout.css`, `css/components.css`, `css/animations.css`, `css/responsive.css`.

**Behavioral Layer (`js/*.js`, `script.js`):**

- Purpose: Lifecycle initialization, UI state handling, particle rendering, DOM updates.
- Location: `script.js` orchestrating modules in `js/`.

## Data Flow

### Primary Page Load Flow

1. Browser parses `index.html` and initiates CSS fetch for `style.css` (`index.html:1`).
2. `style.css` imports design tokens from `css/variables.css` through `css/responsive.css` (`style.css:6-10`).
3. Browser downloads and parses `script.js` as an ES module (`index.html:482`).
4. On `DOMContentLoaded`, `script.js` calls `initCore()`, `initPlayground()`, `initVibes()`, `initStats()`, and `initLieDetector()` (`script.js:12-18`).
5. `initStats()` registers an `IntersectionObserver` to trigger counter animation when stats scroll into view (`js/stats.js:32-41`).
6. `initCore()` hooks the `visibilitychange` listener for tab-switch guilt-trips (`js/core.js:116-130`).

### Interactive Excuses (Lie Detector) Flow

1. User clicks an excuse card (`js/quotes.js`).
2. Click coordinates calculate pop position.
3. Module evaluates excuse, triggers stamp animation, updates radar pill, and fires `burst(x, y, emojis, count)` (`js/burst.js:10-24`).

**State Management:**

- Stateless client model; transient UI state (e.g. bug kill count in `js/playground.js`, roast index in `js/vibes.js`, active project estimate in `js/core.js`) lives in module-scoped variables. Persistent session state is kept in `sessionStorage` (`cookieDismissed`).

## Key Abstractions

**Particle Burst Engine (`js/burst.js`):**

- Purpose: Clean, reusable particle physics simulation without external canvas libraries.
- Examples: `js/burst.js`, consumed by `js/core.js`, `js/playground.js`, `js/quotes.js`.
- Pattern: Ephemeral DOM elements styled with CSS custom properties (`--dx`, `--dy`, `--r`) and self-garbage collection via `setTimeout(() => e.remove(), 1200)`.

**Tiered Modal Generator (`js/playground.js`):**

- Purpose: Procedural generation of responsive SVG-like certificate documents inside an accessible dialog modal.
- Pattern: Factory function reading configured tier metadata based on bug kill thresholds (10, 20, 25, 30+).

## Entry Points

**DOM Entry Point:**

- Location: `index.html`
- Triggers: Browser HTTP request to `/` or `index.html`
- Responsibilities: Renders the entire single-page document shell.

**Script Orchestrator:**

- Location: `script.js`
- Triggers: `DOMContentLoaded` event
- Responsibilities: Imports and initializes each feature module in deterministic sequence.

## Architectural Constraints

- **Single-Threaded Event Loop:** All DOM manipulation runs on the main browser thread. CPU-intensive loops must be avoided; RAF (`requestAnimationFrame`) is used for counters (`js/stats.js`).
- **No Bundler Transpilation:** Code must use universally supported modern JS features (arrow functions, modules, template literals, destructuring, const/let) without relying on JSX or non-standard syntax.
- **Motion Accessibility:** Animation logic must check `window.matchMedia('(prefers-reduced-motion: reduce)')` to respect user OS accessibility preferences.

## Anti-Patterns

### Inline Event Handlers

**What happens:** Placing `onclick="doSomething()"` directly inside HTML elements.
**Why it's wrong:** Violates Content Security Policy (CSP), breaks modular JS scope, and clutters semantic markup.
**Do this instead:** Use `addEventListener` inside the dedicated JS module (`js/core.js`, `js/playground.js`).

### Direct DOM Mutex Blocking

**What happens:** Using synchronous `while` loops for counter animations or delays.
**Why it's wrong:** Freezes browser scrolling and frame rendering.
**Do this instead:** Use `requestAnimationFrame` with timestamp delta calculation, as demonstrated in `js/stats.js`.

## Error Handling

**Strategy:** Defensive DOM element existence checks (`if (!el) return;`) before attaching event listeners or mutating inner text.

**Patterns:**

- Optional Web API detection (e.g., `'IntersectionObserver' in window` fallback in `js/core.js` and `js/stats.js`).
- Safe bounding client rect coordinate clamping in runaway button physics (`js/core.js`).

## Cross-Cutting Concerns

**Logging:** Console diagnostics only in development; zero noisy logs in production.
**Validation:** Client-side sanitization and fallback strings for input fields (e.g. pitch roaster in `js/vibes.js`).
**Accessibility:** Visible `:focus-visible` outlines defined in `css/variables.css`, ARIA modal attributes (`role="dialog"`, `aria-modal="true"` in `js/playground.js`), and `prefers-reduced-motion` guards in `js/burst.js`.

---

*Architecture analysis: 2026-10-30*
