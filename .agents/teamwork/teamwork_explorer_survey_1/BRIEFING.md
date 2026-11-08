# BRIEFING — 2026-11-07T18:41:00Z

## Mission
Survey architecture, layout, build systems, and design system integration points for the Cosmo AI Assistant in SAT-Base.

## 🔒 My Identity
- Archetype: teamwork_explorer
- Roles: Survey Explorer 1 (Architecture, Layout & Build Systems)
- Working directory: f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_1\
- Original parent: a4ec2896-b1e5-48c9-a214-b68faadf6b59
- Milestone: Survey & Discovery

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- Write ONLY to f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_1\
- Output report in handoff.md and notify orchestrator via send_message

## Current Parent
- Conversation ID: a4ec2896-b1e5-48c9-a214-b68faadf6b59
- Updated: not yet

## Investigation State
- **Explored paths**:
  - `package.json`, `scripts/check-tokens.mjs`, `tailwind.config.js`, `src/index.css`, `index.html`
  - `src/main.tsx`, `src/App.tsx`, `src/layouts/DashboardLayout.tsx`
  - `src/components/navigation/AppHeader.tsx`, `src/components/navigation/AppSidebar.tsx`, `src/components/navigation/MobileTabBar.tsx`
  - `src/components/ai/AITutorDrawer.tsx`, `src/lib/tutorValidator.ts`, `supabase/functions/tutor/index.ts`
  - `src/components/bluebook/BluebookFooter.tsx`, `src/components/ui/` (`EmptyState`, `Modal`, `Tooltip`, etc.)
  - `src/pages/Dashboard.tsx`, `src/pages/TopicPracticeArena.tsx`, `src/pages/DesignSystemPage.tsx`
  - `tests/*.test.mjs`
  - `docs/DESIGN_RULES.md`, `SATBASE_AI_SYSTEM_GUIDE.md`
- **Key findings**:
  - Framework: Vite 6.0.1 + React 18.3.1 SPA with React Router DOM v6.28.
  - Test runner: Node.js native test runner (`node --test tests/*.test.mjs`). All 36 tests pass.
  - Strict Token Linter: `scripts/check-tokens.mjs` runs on every build, strictly forbids default Tailwind colors, numbered brand colors, and hardcoded hex classes. Must use Cosmo Notebook design tokens (`paper`, `surface`, `ink`, `accent`, etc.).
  - Layout & Navigation: `DashboardLayout` wraps main dashboard routes with desktop `AppSidebar` (248px/64px) and mobile `MobileTabBar` (h-16, fixed bottom). Fullscreen routes (`TopicPracticeArena`, `FlashRushMockTest`) render outside `DashboardLayout`.
  - Integration Point: Universal Cosmo floating widget can be mounted inside `App.tsx` (wrapped by `AppProvider`), using `bottom-20 md:bottom-6 right-4 sm:right-6 z-40` to avoid collisions with mobile tab bar (h-16) and desktop elements. Must respect mock exam mode (disabled/quiet on `/mock-tests/flashrush`).
  - Mascot Assets & Animation: Avatars exist in `public/images/avatar/` (`celebrate`, `focus`, `logo`, `study`, `blue`). Classes like `animate-float` are used across codebase but `@keyframes float` is currently missing in CSS!
- **Unexplored areas**: None for survey scope.

## Key Decisions Made
- Confirmed Node & npm are located at `F:\Batyrbaev`.
- Ran and verified clean passes for `npm test` (36 tests), `npm run check:tokens`, `npm run typecheck`, and `npm run build`.
- Formulated the 5-component handoff report.

## Artifact Index
- DISPATCH.md — Stored dispatch instructions
- progress.md — Liveness heartbeat and task progress
- handoff.md — Comprehensive architectural survey report
