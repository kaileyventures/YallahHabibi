---
last_mapped_commit: ccbd7fd2faeeb3d998da7132efa4e771007c7eed
last_mapped_at: 2026-10-30
---
# External Integrations

**Analysis Date:** 2026-10-30

## APIs & External Services

**Typography / Fonts:**

- Google Fonts - Hosted font delivery for `Space Grotesk` and `Syne` (`index.html`)
  - Integration: `<link rel="preconnect" href="https://fonts.googleapis.com">` and stylesheet link
  - Auth: None (public CDN)

**External Messaging & Code Repositories:**

- GitHub - Source code hosting and open-source contribution link (`https://github.com/kaileyventures/YallahHabibi` linked in `index.html`, `llms.txt`)
- Telegram - Direct contact / messaging channel (`https://t.me/YallahHabibi` linked in `index.html`, `llms.txt`)
- X (Twitter) - Social connection & developer discussions (`https://x.com/yallahxhabibi` linked in `index.html`, `llms.txt`, `README.md`)

## Data Storage

**Databases:**

- None detected (Stateless client-side application).

**File Storage:**

- Local filesystem / Static asset hosting only (all icons, images `og-image.jpg`, `logo.png`, `icon-192.png`, `favicon-48.png`, and `favicon.svg` reside locally in root).

**Caching & Client Persistence:**

- Browser `sessionStorage` (`js/playground.js`):
  - Used for storing cookie notification dismissal state (`sessionStorage.getItem('cookieDismissed')`) to prevent banner re-triggering during the same browsing session.

## Authentication & Identity

**Auth Provider:**

- None / Not applicable (Public portfolio website, no user accounts or authentication flows).

## Monitoring & Observability

**Error Tracking:**

- None configured (Browser console errors only; no Sentry or LogRocket installed).

**Logs:**

- Browser DevTools console logging (`console.log`, `console.error`) during local development.

## CI/CD & Deployment

**Hosting:**

- Static web hosting mapped to custom domain `yallahhabibi.is-a.dev` (via `is-a.dev` free DNS registry for developers).

**CI Pipeline:**

- None configured in repo root (deployments handled via Git push or static host integration).

## Environment Configuration

**Required env vars:**

- None required (entirely client-side static code).

**Secrets location:**

- No secrets stored in codebase. Safe for public repository sharing.

## Webhooks & Callbacks

**Incoming:**

- None.

**Outgoing:**

- None.

---

*Integration audit: 2026-10-30*
