# kike.me

Portfolio of Kike Tordera — mobile developer & UX/UI engineer, Berlin. Nuxt 4 (SPA + prerender), deployed to Firebase Hosting with a Gen 2 Cloud Function for the non-prerendered routes and on-demand image optimisation.

## Run

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # production build (runs vue-tsc via typescript.typeCheck)
yarn lint       # eslint, flat config from @nuxt/eslint
yarn nuxi typecheck
```

Node 22+ locally and in CI (`.github/workflows/*`); the Cloud Function runtime is pinned to Node 22 in `nuxt.config.ts` (`nitro.firebase.nodeVersion`).

## Design system

The visual identity is "written in code": `{ braces }` around titles, `//` markers, a mono voice, teal / salmon / yellow on near-black. It is implemented as one system — read these before touching any component:

| File | What it is |
| --- | --- |
| `app/assets/scss/_tokens.scss` | Every colour, type size, space, radius and motion token, as CSS custom properties. The only place values live. |
| `app/assets/scss/_mixins.scss` | Layout and component mixins (`k-section`, `k-grid`, `k-label`/`k-content`, `k-title`, `k-btn-primary`, `k-link`…). Injected into every component's `<style lang="scss">` automatically. |
| `app/assets/scss/_base.scss` | Global rules and the `.k-*` utility classes; the reveal and page-transition CSS; third-party restyling (cookie bar). Imported once from `main.scss`, never injected. |
| `app/assets/scss/_variables.scss` | Sass aliases of the tokens for legacy components, plus Value Villages' own client palette. |
| `app/assets/scss/_fonts.scss` | Source Code Pro and Source Sans 3 as variable woff2 files; Nunito (variable) for the Value Villages routes only. Choose weight with `font-weight`, never by family name. |
| `app/plugins/reveal.client.ts` | `v-reveal` / `v-reveal.stagger` — the single scroll-reveal vocabulary (IntersectionObserver, once, gated on `prefers-reduced-motion`). |

Rules that keep it a system: no hex literals or new Sass variables in components; no `text-align: justify`; no pure black or white borders; mono (`var(--font-mono)`) for headings, labels and short copy, the text face (`var(--font-text)`) for paragraphs at 65ch; one yellow primary action per view; every animation inside `@media (prefers-reduced-motion: no-preference)`.

Layout: a 12-column grid inside `.k-container` with labels in columns 1–4 (`.k-label`) and content in 5–12 (`.k-content`); sections use `.k-section` for vertical rhythm and open with a `.k-marker` such as `// 01 work`.

## Content

- UI copy: `i18n/locales/<locale>.json` (`v2.*` namespace for the redesign) plus per-area files under `i18n/locales/{about,case-study,legal,vv,vv-extra}/`.
- Structured data: `app/assets/data/i18n/{projects,work-experience,team}/*-<locale>.json`. The experience stats on the home page ("N years, N roles, N countries") are computed from `work-experience`.
- Apps: `app/types/apps.ts`; each needs `apps.<id>.description` in every locale or the card omits the line.
- Contact channels: `app/composables/contactLinks.ts` (one Calendly, one email, one WhatsApp link).

## Known workaround

Nuxt 4.5.x does not seed prerender routes from `routeRules` on a server preset (it reads `.prerender` off rou3 match objects instead of `match.data`). `nuxt.config.ts` collects the static pages in a `pages:resolved` hook and hands them to nitro in `nitro:build:before`. Delete it once Nuxt fixes the bug; verify with `find .output/public -name '*.html' | wc -l`.
