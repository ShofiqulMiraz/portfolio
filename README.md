# Personal Portfolio — Shofiqul Islam Miraz

Live: **[shofiqul-portfolio.vercel.app](https://shofiqul-portfolio.vercel.app)**

A single-page personal site covering who I am, what I work on, and where I've shipped — no marketing fluff.

Built with **React Router 7** (SSR), **Tailwind CSS v4**, **Motion**, and **TypeScript**. Package manager: **Bun**. Formatting and linting via **Biome**.

## Develop

```bash
bun install
bun run dev          # http://localhost:5173
```

## Production

```bash
bun run build
bun run start        # serves the SSR bundle from ./build
```

## Quality gates

```bash
bun run typecheck    # react-router typegen + tsc
bun run check        # biome format + lint + class sort + import sort (auto-fix)
bun run lint         # biome lint only
bun run format       # biome format only
bun run ci           # biome ci (no writes; CI-safe)
```

Git hooks (set up via Husky on `bun install`):

- **pre-commit** runs `lint-staged` → `biome check --write` on staged files.
- **pre-push** runs `typecheck` + `build` so the remote never sees a broken production build.

## Editing content

All copy lives in [`app/data/portfolio.ts`](app/data/portfolio.ts) — profile, experiences, skills, education, socials. Components are pure presentation.

For deeper architecture notes (theme tokens, responsive quirks, conventions), see [`CLAUDE.md`](CLAUDE.md).
