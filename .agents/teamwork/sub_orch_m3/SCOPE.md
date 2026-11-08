# Scope: Milestone 3 — Universal Assistant UI & Global Layout Integration

## Architecture
- Upgrade `src/components/ai/AITutorDrawer.tsx` to provide universal assistance:
  - Header with live synchronized animated Cosmo mascot (`<CosmoMascot />`) that mirrors assistant states (`idle`, `thinking`, `talking`).
  - Dual-mode operation:
    1. Universal / General mode: displays suggested quick action pills (Explain concept, Math formulas, Desmos shortcuts, Pacing strategy, Platform tour, Score analysis).
    2. Socratic Practice mode: displays active question context and 3-level progressive hint ladder without answer spoiling.
  - Full KaTeX math rendering, markdown/bullet formatting, and responsive desktop (slide-over drawer) / mobile (bottom sheet) layout.
  - Complete ARIA accessibility, focus trapping, Escape keyboard shortcut.
- Create `src/components/ai/CosmoUniversalAssistant.tsx`:
  - Mounts `<CosmoLauncher />` at `fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40` ensuring 0 collision with `MobileTabBar` (`h-16`) on mobile.
  - Integrates with `useApp()` (`isAITutorOpen`, `openAITutor`, `closeAITutor`, `tutorContext`).
  - Hides launcher when drawer is open.
  - Detects active route: on `/mock-tests/flashrush`, sets state to `'sleeping'` for official test quiet mode.
- Mount `<CosmoUniversalAssistant />` in `src/App.tsx` directly inside `<BrowserRouter>`.

## Code Layout Ownership
- `src/components/ai/CosmoUniversalAssistant.tsx`
- `src/components/ai/AITutorDrawer.tsx`
- `src/App.tsx`

## Design Token Strictness
- Must strictly use Cosmo Notebook design tokens (`paper`, `surface`, `paper-2`, `ink`, `border-line`, `accent`, etc.).
- Zero forbidden Tailwind scale classes or hardcoded hex values (`scripts/check-tokens.mjs`).

## Completion Criteria
1. Cosmo assistant accessible from all routes via floating launcher and header/sidebar triggers.
2. Floating launcher at `bottom-20 md:bottom-6` clears mobile tab bar with zero collisions.
3. Assistant operates in dual mode (universal platform questions + practice arena Socratic hints).
4. Mascot reflects real-time assistant states in drawer header.
5. `npm run check:tokens` passes with 0 violations.
6. `npm run typecheck` passes with 0 errors.
7. `node --test tests/*.test.mjs` passes cleanly.
8. `npm run build` succeeds cleanly.
