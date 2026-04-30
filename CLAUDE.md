# Portfolio — Shofiqul Islam Miraz

Personal portfolio site. Single-page, dark theme, content-first. Production: https://shofiqul-portfolio.vercel.app.

## Stack

- **React Router 7** in framework mode with **SSR enabled** (`react-router.config.ts`).
- **Vite 6** as the build tool. Dev server is `react-router dev`, production server is `react-router-serve`.
- **Tailwind CSS v4** via `@tailwindcss/vite`. **No `tailwind.config.js`** — theme lives in CSS via `@theme` inside [app/app.css](app/app.css).
- **Motion** (formerly Framer Motion) for animations.
- **Lucide** for icons.
- **TypeScript** strict mode. Path alias `~/*` → `./app/*` (no `baseUrl`; deprecated since TS 6).
- **Bun** as package manager and runtime. `bun install`, `bun run dev`, etc.
- **Biome 2.x** for formatter + linter + import sort + Tailwind class sort. Replaces Prettier + ESLint entirely.
- **Husky + lint-staged** for pre-commit hook (`biome check --write` on staged files).

## Commands

```bash
bun run dev         # http://localhost:5173 (SSR dev)
bun run build       # production build → ./build
bun run start       # serve the production build
bun run typecheck   # react-router typegen + tsc
bun run check       # biome check --write . (format + lint + sort + fix)
bun run lint        # biome lint .
bun run format      # biome format --write .
bun run ci          # biome ci . (no writes; for CI)
```

## Layout

```
app/
  app.css                  # Tailwind v4 entry + @theme tokens + utilities
  root.tsx                 # HTML shell, fonts (Inter + Sora), error boundary
  routes.ts                # route table — single index route
  routes/home.tsx          # the only page; meta() exports SEO tags
  entry.client.tsx         # hydrateRoot
  entry.server.tsx         # renderToPipeableStream + isbot

  components/
    NavBar.tsx             # fixed header + full-screen mobile drawer (MobileMenu sub-component)
    Hero.tsx               # availability pill, gradient headline, CTAs
    Section.tsx            # shared eyebrow/title/description wrapper used by About/Experience/Skills/Contact
    About.tsx              # paragraphs + stat row + focus row + photo card + education
    Experience.tsx         # animated vertical timeline; period + duration pill
    Skills.tsx             # 5 skill groups as hover-glow cards
    Contact.tsx            # primary email card + contact rows + socials
    Footer.tsx             # copyright + tagline

  data/
    portfolio.ts           # ALL content (profile, experiences, skills, education, socials)

  lib/
    period.ts              # formatPeriod, formatDuration — used by Experience
    scroll.ts              # scrollToSection(id) — used by NavBar/Hero in-page nav

public/
  Resume_Shofiqul.pdf      # CV (linked from Hero + NavBar + mobile drawer)
  profilePic.jpg           # used in About card and og:image
  favicon.ico
```

## Theme

Defined as CSS variables in [app/app.css](app/app.css) under `@theme`:

- `--color-bg`, `--color-bg-subtle`, `--color-card`, `--color-border`
- `--color-text`, `--color-text-muted`
- `--color-accent` (`#7c5cff`), `--color-accent-soft` (`#a78bfa`)
- `--font-sans` (Inter), `--font-display` (Sora)

These auto-generate Tailwind utilities: `bg-card`, `text-text-muted`, `border-border`, `bg-accent`, `text-accent-soft`, etc. **Always use these short forms** — Biome's `useSortedClasses` plus the Tailwind LSP will flag verbose `[color:var(--color-…)]` arbitrary values.

Custom utilities defined in `app.css`: `.container-page` (centered max-w-6xl with padding), `.text-gradient`, `.grid-bg`, `.glow`.

## Conventions

- **Indent**: 4 spaces. Enforced by `.editorconfig` + `biome.json`.
- **Line width**: 100. Quotes: double. Semicolons: always. Trailing commas: all.
- **Tailwind classes**: canonical order (Biome assist sorts on save). Use theme utility names, not arbitrary `[color:var(--…)]` values, when a theme token exists.
- **Tailwind v4 syntax**: prefer `bg-linear-to-br` over `bg-gradient-to-br`, `aspect-3/2` over `aspect-[3/2]`, `h-4.5` over `h-[18px]`. Biome/LSP flag the older forms.
- **In-page navigation**: never `<a href="#section">`. Use `<button onClick={() => scrollToSection(id)}>` from [app/lib/scroll.ts](app/lib/scroll.ts). The helper smooth-scrolls and does **not** mutate the URL hash (deliberate — user wants a clean URL).
- **Animation idiom**: enter via `whileInView` with `viewport={{ once: true, margin: "-80px" }}`. Easing reused: `[0.22, 1, 0.36, 1]` (out-expo-ish). Mobile drawer has separate snappier exit transition.
- **No projects section** — the user has been employed throughout and doesn't have personal projects to showcase. Don't add one.
- **No `<Link>` for in-page anchors** — there are no other routes. Reserve `react-router` `<Link>` for when a real second route exists.
- **All copy lives in [app/data/portfolio.ts](app/data/portfolio.ts)** — components are pure presentation. Edit content there.

## Data shape — Experience

```ts
type Experience = {
  role: string;
  company: string;
  start: string;       // "YYYY-MM" or "YYYY"
  end: string | null;  // null means "Present"
  highlights: string[];
};
```

Period and duration are **derived** at render time by [app/lib/period.ts](app/lib/period.ts) — never hardcode "May 2024 — Present" or "2 Years 4 Months". Update `start` / `end` only.

`formatDuration` uses inclusive endpoints (May 2024 → April 2026 reads as "2 Years"), and falls back to `new Date()` for current roles, so the page stays accurate over time without intervention. Plural form is "Year"/"Years", "Month"/"Months" (full words, capitalized).

## Responsive breakpoints (About section quirks)

The About section's right-rail layout has three modes:

- **Mobile (< 768px)**: full-width stacked column. Photo card (`aspect-4/5`) over Education card.
- **Tablet (md, 768–1023px)**: outer grid is single column; aside becomes a full-width 2-col row (photo `aspect-3/2` | Education).
- **Desktop (lg, 1024+)**: outer grid `1fr_320px`; aside back to stacked flex (photo `aspect-4/5` again, in the narrow rail).

The aside className uses `flex flex-col … md:grid md:grid-cols-2 … lg:flex lg:flex-col` to flip between modes. The image's aspect ratio is breakpoint-keyed: `aspect-4/5 md:aspect-3/2 lg:aspect-4/5`.

## Mobile menu

Full-screen overlay drawer in `MobileMenu` (sub-component inside [app/components/NavBar.tsx](app/components/NavBar.tsx)):

- Backdrop blur, body scroll lock while open, Escape closes.
- Numbered nav items in display type, staggered `whileInView`.
- Quick-actions: mailto + resume CTA. Footer row with location + socials.
- Open is slow/smooth (0.45s out-expo); close is snappy (0.22s ease-in). The two transitions are specified separately on `animate` vs `exit`.
- Toggle icon swap (Menu ↔ X) is **not** done with `AnimatePresence` — it's two icons stacked absolutely with CSS opacity/rotate transitions to avoid the brief flicker that `mode="wait"` introduced.

## Editor / tooling

- VS Code: install Biome extension. Config in [.vscode/settings.json](.vscode/settings.json) sets Biome as default formatter, `formatOnSave`, `codeActionsOnSave` for fixAll + organizeImports. `[.vscode/extensions.json](.vscode/extensions.json)` recommends Biome + Tailwind CSS IntelliSense + EditorConfig.
- `biome.json` enables `useSortedClasses` (nursery rule) for `className`, `clsx`, `cn`, `cva`, `twMerge`. CSS parser has `tailwindDirectives: true` so `@apply` / `@theme` in `app.css` parse correctly.
- Pre-commit: `.husky/pre-commit` → `bunx lint-staged` → `biome check --write` on staged JS/TS/JSON/CSS.
- Pre-push: `.husky/pre-push` → `bun run typecheck && bun run build`. Catches type errors and broken production builds before they reach the remote.

## Things to NOT do

- Don't reintroduce a `tailwind.config.js` — Tailwind v4 reads `@theme` from CSS.
- Don't reintroduce Prettier or ESLint — Biome handles all of it.
- Don't add `baseUrl` back to `tsconfig.json` (deprecated). The `paths` alias works without it.
- Don't add the projects section.
- Don't update the URL on smooth-scroll (`scrollToSection` deliberately omits `history.replaceState`).
- Don't write tech-stack credits in the footer ("Built with React Router…"). The user removed that on purpose.
- Don't put icons in skill chips. Tried earlier; user prefers text-only pills.

## Deployment

Currently deployed on Vercel at https://shofiqul-portfolio.vercel.app. The build emits `build/client` (static assets) and `build/server/index.js` (SSR entry). `bun run start` uses `@react-router/serve` to serve the SSR bundle. For Vercel, the React Router preset will Just Work without a `vercel.json` thanks to RR7's framework adapter detection — no special config has been added yet.

## Future / parking lot

- Add `vercel.json` if Vercel auto-detection needs help.
- Add a real OG image (currently uses `profilePic.jpg`).
- Consider GitHub Actions running `bun run ci` + `bun run typecheck` on PRs.
- Education `period` is still a free-form string; could be migrated to `start`/`end` like Experience if needed.
