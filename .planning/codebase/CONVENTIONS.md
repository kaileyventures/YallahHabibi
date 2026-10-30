---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
# Coding Conventions

**Analysis Date:** 2026-10-30

## Naming Patterns

**Files:**

- Modular CSS files: `css/<domain>.css` (e.g. `css/layout.css`, `css/components.css`).
- Modular JS files: `js/<domain>.js` (e.g. `js/core.js`, `js/burst.js`, `js/playground.js`).
- Static assets: kebab-case with file extension (e.g. `og-image.jpg`, `favicon-48.png`).

**Functions:**

- camelCase starting with an action verb:
  - Initialization: `initCore()`, `initPlayground()`, `initVibes()`, `initStats()`, `initLieDetector()`.
  - Utility/Physics: `burst(x, y, icons, n)`, `flee()`, `getCertData(killCount)`.

**Variables & Elements:**

- camelCase for element references: `runawayBtn`, `runMsg`, `modalBackdrop`, `favIconLinks`.
- Short abbreviations for local loops/iterations: `b` for button, `el` for element, `e` for event, `r` for bounding rect.

**CSS Custom Properties:**

- Kebab-case prefixed with double hyphens: `--ink`, `--pink`, `--mustard`, `--mint`, `--paper`, `--red`, `--dx`, `--dy`, `--r`.

## Code Style

**Formatting:**

- Indentation: 2 spaces.
- Semicolons: Explicitly used at statement ends.
- Quotes: Single quotes `'...'` preferred in JS; template literals `` `...` `` used for multi-line strings and dynamic expressions.
- Braces: Egyptian brackets (opening brace on same line).

**Linting:**

- Not currently enforced by an external linter (ESLint/Biome not installed). Clean native ES6+ idioms followed consistently.

## Import Organization

**Order:**

1. Reusable helper modules (e.g. `import { burst } from './burst.js';`)
2. Feature initialization exports in `script.js`

**Module Format:**

- Always explicit file extensions: native browser modules require `./js/core.js` rather than `./js/core`.

**Path Aliases:**

- None; native relative paths (`./js/...`, `../css/...`) are required for zero-build browser compatibility.

## Error Handling

**Patterns:**

- Guard Clauses for DOM elements: Always test for element existence before attaching listeners to avoid `TypeError: Cannot read properties of null`:
  ```javascript
  const runawayBtn = document.getElementById('runaway');
  if (runawayBtn) {
    runawayBtn.addEventListener('click', flee);
  }
  ```
- Feature Detection: Check for modern API availability before invoking:
  ```javascript
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(...);
    // ...
  } else {
    // Fallback behavior
  }
  ```
- Reduced Motion Checks: Respect accessibility motion flags before spawning particle animations:
  ```javascript
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  ```

## Logging

**Framework:** Native `console`.

**Patterns:**

- Silent by default in production.
- No stray `console.log` statements committed in core application code.

## Comments

**When to Comment:**

- Header file documentation explaining module purpose and exports using JSDoc-style comments (`/** ... */`).
- Section dividing banners in CSS and JS:
  ```css
  /* ==========================================================================
     Base styles, CSS Variables, and Resets
     ========================================================================== */
  ```

**JSDoc/TSDoc:**

- Used for utility functions with param annotations:
  ```javascript
  /**
   * Spawns flying emoji burst particles at (x, y) coordinates.
   * Respects prefers-reduced-motion preferences.
   * 
   * @param {number} x Screen coordinate X
   * @param {number} y Screen coordinate Y
   * @param {string[]} icons Array of emojis/icons to burst
   * @param {number} n Count of particles to spawn
   */
  export function burst(x, y, icons, n) { ... }
  ```

## Function Design

**Size:**

- Single responsibility functions. Complex modal template generation is encapsulated in `getCertData` or dedicated click handlers.

**Parameters:**

- Concise parameter lists (1 to 4 positional arguments). Default parameters or object destructuring when multiple optional arguments exist.

**Return Values:**

- Initialization functions return `void`. Pure data lookup functions return immutable-style object literals.

## CSS Neo-Brutalist Architecture Conventions

**Borders & Shadows:**

- Solid ink borders: `border: 3px solid var(--ink);` or `border: 4px solid var(--ink);`.
- High-contrast hard drop shadows (no blur radius): `box-shadow: 6px 6px 0px var(--ink);` or `box-shadow: 4px 4px 0px rgba(29, 16, 51, 0.9);`.
- Active button press displacement:
  ```css
  .btn:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px var(--ink);
  }
  ```

**Color Application:**

- Distinct background accent colors (`--pink`, `--mustard`, `--mint`, `--red`) applied to distinct card types for retro comic book aesthetic.

---

*Convention analysis: 2026-10-30*
