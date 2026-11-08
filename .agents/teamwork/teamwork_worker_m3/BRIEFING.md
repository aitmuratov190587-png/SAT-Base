# BRIEFING — 2026-11-07T19:05:00Z

## Mission
Implement Milestone 3: Universal Assistant UI & Global Layout Integration with dual-mode AITutorDrawer, CosmoUniversalAssistant floating launcher, and root App.tsx integration.

## 🔒 My Identity
- Archetype: teamwork_worker
- Roles: implementer, qa, specialist
- Working directory: f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m3
- Original parent: a4ec2896-b1e5-48c9-a214-b68faadf6b59
- Milestone: Milestone 3: Universal Assistant UI & Global Layout Integration

## 🔒 Key Constraints
- Exclusive File Ownership: `src/components/ai/CosmoUniversalAssistant.tsx`, `src/components/ai/AITutorDrawer.tsx`, `src/App.tsx`
- Strictly adhere to Cosmo Notebook tokens (`bg-paper`, `bg-surface`, `bg-paper-2`, `text-ink`, `text-ink-2`, `border-line`, `moss`, `mustard`, `berry`, `cobalt`, `accent`). NEVER use default Tailwind scales or hex codes. `node scripts/check-tokens.mjs` must pass with 0 forbidden classes.
- Node/npm path: `$env:PATH = "F:\Batyrbaev;" + $env:PATH`
- Integrity mandate: genuine implementation, zero cheating, zero hardcoding.

## Current Parent
- Conversation ID: a4ec2896-b1e5-48c9-a214-b68faadf6b59
- Updated: not yet

## Task Summary
- **What to build**:
  1. Upgraded `src/components/ai/AITutorDrawer.tsx` with live synchronized `<CosmoMascot />` header, dual mode (universal with 6 quick actions + practice with Socratic hint ladder), KaTeX block and inline math rendering, responsive slide-over/bottom sheet, and full accessibility.
  2. Created `src/components/ai/CosmoUniversalAssistant.tsx` with `<CosmoLauncher />` at `fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40`, route quiet mode on `/mock-tests/flashrush`, and drawer mounting.
  3. Mounted at root in `src/App.tsx` inside `<BrowserRouter>` and cleaned up duplicate drawer in `DashboardLayout.tsx`.
- **Success criteria**: 0 token violations, 0 tsc errors, 100% tests passing, clean `npm run build`.
- **Interface contracts**: PROJECT.md, SCOPE.md, cosmoKnowledge.ts, cosmoAssistantService.ts, CosmoMascot.tsx, CosmoLauncher.tsx
- **Code layout**: `src/components/ai/`, `src/App.tsx`, `src/layouts/`

## Key Decisions Made
- Delegated message answering in `AITutorDrawer` directly to `queryCosmoAssistant` from `cosmoAssistantService.ts` for fast 0ms instant local resolution, Socratic practice guard, 3-layer context pipeline, and graceful fallback.
- Added support for both block display math `$$...$$` and inline math `$..$` with KaTeX rendering and graceful serif fallback.
- Positioned floating launcher at `bottom-20 md:bottom-6 right-4 sm:right-6 z-40` to guarantee 0 collision with `MobileTabBar` (`h-16`) on mobile.
- Cleanly removed redundant `<AITutorDrawer>` mount in `DashboardLayout.tsx` since root `<CosmoUniversalAssistant />` centrally manages the drawer globally.

## Artifact Index
- `src/components/ai/AITutorDrawer.tsx` — Dual-mode universal and Socratic assistant drawer with live header mascot
- `src/components/ai/CosmoUniversalAssistant.tsx` — Global floating launcher with route-aware quiet mode and drawer mount
- `src/App.tsx` — Root mounting inside `<BrowserRouter>`
- `src/layouts/DashboardLayout.tsx` — Removed duplicate drawer mount
- `tests/cosmoUI.test.mjs` — Comprehensive automated UI tests covering mascot states, dual mode, responsive layout, and app mounting

## Change Tracker
- **Files modified**:
  - `src/components/ai/AITutorDrawer.tsx`: Upgraded with synchronized mascot, dual mode, and KaTeX rendering
  - `src/components/ai/CosmoUniversalAssistant.tsx`: Created floating launcher with collision-free positioning and drawer mount
  - `src/App.tsx`: Mounted CosmoUniversalAssistant at router root
  - `src/layouts/DashboardLayout.tsx`: Cleaned duplicate drawer mount
  - `tests/cosmoUI.test.mjs`: Added M3 test suite (7 tests)
- **Build status**: PASS (1,713 modules built in 2.76s)
- **Pending issues**: None

## Quality Status
- **Build/test result**: PASS (73/73 tests pass)
- **Lint status**: PASS (0 forbidden class violations)
- **Tests added/modified**: 7 new tests in `tests/cosmoUI.test.mjs`

## Loaded Skills
- None
