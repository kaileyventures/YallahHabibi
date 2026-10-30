---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
# Testing Patterns

**Analysis Date:** 2026-10-30

## Test Framework

**Runner:**

- Not detected / None configured (No automated test framework installed).
- Config: `None`

**Assertion Library:**

- None configured.

**Run Commands:**

```bash

# Currently no automated test runner configured

# Verification is performed via manual browser testing

```

## Test File Organization

**Location:**

- No test files present in the repository (`*.test.js`, `*.spec.js` not detected).

**Naming:**

- Not established. Recommended pattern for future tests: `tests/**/*.test.js` or `js/__tests__/<module>.test.js`.

**Structure:**

- Not applicable.

## Manual Testing Practices

Because this project is a zero-build client-side portfolio with high interactivity, manual verification workflows currently cover the following user journeys:

1. **Responsive Viewport Verification:**
   - Test screen widths across Mobile (375px, 414px), Tablet (768px, 820px), and Desktop (1280px, 1920px).
   - Inspect navigation bar, runaway button, ticker scrolling, and certificate modal fit.

2. **Feature Interaction Testing:**
   - **Runaway Button:** Hovering or touching `#runaway` causes it to flee within viewport boundaries and cycles dialogue in `#runmsg`.
   - **Bug Hunter Mini-game:** Clicking the crawling bug triggers squash animation, increments count, and successfully launches the QA certificate modal at 10, 20, and 25 kills.
   - **Polygraph (Lie Detector):** Clicking excuse cards triggers stamp appearance and particle bursts.
   - **Roaster:** Clicking roast button generates a sarcastic punchline with smooth animation.
   - **Stats Counter:** Scrolling past statistical counters triggers smooth linear interpolation to target value.
   - **Tab Inactive Guilt Trip:** Switching to another browser tab updates the document title and changes favicon to 👀.

3. **Motion Sensitivity & Accessibility:**
   - Enable "Reduce Motion" in OS settings or browser DevTools emulation (`prefers-reduced-motion: reduce`).
   - Confirm particle explosions and shaking animations are disabled while core UI functionality remains intact.

## Mocking

**Framework:** None.

**What to Mock (Future Recommendations):**

- Mock browser viewport APIs (`window.innerWidth`, `window.innerHeight`, `getBoundingClientRect`) when testing runaway button math.
- Mock `IntersectionObserver` when testing skill bar and stat counter triggers.
- Mock `sessionStorage` for cookie banner dismissal unit tests.

**What NOT to Mock:**

- Pure functions like text formatting, roast string replacement, or certificate generation logic.

## Coverage

**Requirements:** None enforced (0% automated code coverage, 100% manual vibe check).

**View Coverage:**

```bash

# Not configured

```

## Test Types

**Unit Tests:**

- Recommended candidates for unit testing:
  - `js/burst.js`: Coordinate math and boundary checks.
  - `js/vibes.js`: Shuffled-deck array rotation algorithm.
  - `js/playground.js`: `getCertData(killCount)` tier calculation.

**Integration Tests:**

- Recommended candidates for integration testing:
  - Validating DOM updates upon custom events or button clicks.

**E2E Tests:**

- Recommended tooling: Playwright or Puppeteer for automated visual regression testing and cross-browser verification (Chromium, Firefox, WebKit).

---

*Testing analysis: 2026-10-30*
