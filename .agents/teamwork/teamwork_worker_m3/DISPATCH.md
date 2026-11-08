## 2026-11-07T18:55:48Z

You are Worker 3 for Milestone 3: Universal Assistant UI & Global Layout Integration.
Your identity: teamwork_worker
Your working directory: f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m3\
Original request path: f:\Batyrbaev\SAT-Base\.agents\teamwork\ORIGINAL_REQUEST.md
Scope documents:
- f:\Batyrbaev\SAT-Base\PROJECT.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\sub_orch_m3\SCOPE.md
Investigation & Module References:
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_1\handoff.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_3\handoff.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m1\handoff.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m2\handoff.md

You MUST read f:\Batyrbaev\SAT-Base\.agents\teamwork\ORIGINAL_REQUEST.md before starting work.
Keep progress.md updated in your working directory with a "Last visited: [timestamp]" header.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Execution Environment note:
Node and npm are located at F:\Batyrbaev\. When running commands in powershell, prepend:
$env:PATH = "F:\Batyrbaev;" + $env:PATH

Exclusive File Ownership:
- src/components/ai/CosmoUniversalAssistant.tsx
- src/components/ai/AITutorDrawer.tsx
- src/App.tsx

Design Token Rule:
Strictly adhere to Cosmo Notebook tokens (bg-paper, bg-surface, bg-paper-2, text-ink, text-ink-2, border-line, moss, mustard, berry, cobalt, accent). NEVER use default Tailwind scales (slate-*, blue-*, gray-*) or hex codes. Running `node scripts/check-tokens.mjs` MUST pass with 0 forbidden classes.

Tasks:
1. Upgrade `src/components/ai/AITutorDrawer.tsx`:
   - Incorporate the live animated `<CosmoMascot />` in the drawer header, synchronizing with assistant state (idle, thinking, talking).
   - Support dual-mode operation:
     a) Universal mode (when opened from dashboard/sidebar without active question): render 6 universal quick action pills (Concept explanation, Math formula helper, Desmos shortcuts, Test pacing strategy, Platform tour, Score analysis) and handle user inquiries across all SAT domains and platform features using `cosmoAssistantService.ts`.
     b) Practice mode (when opened with question context): preserve Socratic hint ladder (Hint 1, 2, 3), step checking, and full solution unlock.
   - Maintain KaTeX formula rendering via `window.katex` / `<FormattedMathText />`.
   - Maintain responsive design (desktop slide-over drawer `w-[440px]`, mobile bottom sheet `h-[88vh]`).
   - Implement complete accessibility (dialog ARIA labels, focus trapping, Escape key listener).
2. Create `src/components/ai/CosmoUniversalAssistant.tsx`:
   - Floating action launcher (`<CosmoLauncher />`) positioned at `fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40` to ensure 0 collision with `MobileTabBar` (`h-16`) on mobile.
   - Integrate with `useApp()` (`isAITutorOpen`, `openAITutor`, `closeAITutor`, `tutorContext`).
   - Detect route using `useLocation()`: when on `/mock-tests/flashrush`, set mascot to `'sleeping'` for official test quiet mode.
   - Mount `<AITutorDrawer />` inside `<CosmoUniversalAssistant />`.
3. In `src/App.tsx`, mount `<CosmoUniversalAssistant />` at the root inside `<BrowserRouter>` (wrapped by `<AppProvider>`). Remove duplicate drawer mounts in `DashboardLayout.tsx` if redundant, or let them cooperate cleanly.
4. Verify your implementation:
   - Run `node scripts/check-tokens.mjs` (must report 0 forbidden classes).
   - Run `npx tsc -p tsconfig.app.json --noEmit` (must exit with code 0).
   - Run `node --test tests/*.test.mjs` (must pass 100%).
   - Run `npm run build` (must complete cleanly).
5. Document all changes and verification in f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m3\handoff.md and notify orchestrator via send_message.
