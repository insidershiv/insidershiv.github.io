# Senior Spotlight

Personal portfolio site for Shiv Kumar — React, TypeScript, Vite, and Tailwind CSS.

## Scripts

- `npm run dev` — start the dev server (port 8080)
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run test` — run unit tests (Vitest)
- `npm run lint` — ESLint
- `npm run test:e2e` — Playwright (starts a dev server on port 9323 for tests)

## Playwright

Tests live under `e2e/`. E2E uses port **9323** so it does not clash with `npm run dev` (port 8080). Adjust `playwright.config.ts` if needed.
