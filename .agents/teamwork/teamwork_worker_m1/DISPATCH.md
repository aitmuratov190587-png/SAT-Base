## 2026-11-07T18:44:21Z
You are Worker 1 for Milestone 1: Mascot & CSS Motion Engine.
Your identity: teamwork_worker
Your working directory: f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m1\
Original request path: f:\Batyrbaev\SAT-Base\.agents\teamwork\ORIGINAL_REQUEST.md
Scope documents:
- f:\Batyrbaev\SAT-Base\PROJECT.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\sub_orch_m1\SCOPE.md
Investigation findings:
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_1\handoff.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_3\handoff.md

You MUST read f:\Batyrbaev\SAT-Base\.agents\teamwork\ORIGINAL_REQUEST.md before starting work.
Keep progress.md updated in your working directory with a "Last visited: [timestamp]" header.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Execution Environment note:
Node and npm are located at F:\Batyrbaev\. When running commands in powershell, prepend:
$env:PATH = "F:\Batyrbaev;" + $env:PATH

Exclusive File Ownership:
- src/index.css
- src/components/mascot/CosmoMascot.tsx
- src/components/mascot/CosmoLauncher.tsx

Design Token Rule:
Strictly adhere to Cosmo Notebook tokens (bg-paper, bg-surface, bg-paper-2, text-ink, text-ink-2, border-line, moss, mustard, berry, cobalt, accent). NEVER use default Tailwind scales (slate-*, blue-*, gray-*) or hex codes. Running `node scripts/check-tokens.mjs` MUST pass with 0 forbidden classes.

Tasks:
1. In `src/index.css`, define `@keyframes float` and the utility `.animate-float` (and any necessary mascot keyframes like pulseAura, gentleBob, orbitalRing) so that existing elements and new mascot components animate smoothly. Also ensure `@media (prefers-reduced-motion: reduce)` is respected.
2. Implement `src/components/mascot/CosmoMascot.tsx`:
   - High-fidelity vector SVG mascot representation of Cosmo the Azure Cosmic Explorer (circular helmet, planetary orbital ring, star particle, peach-tipped glowing antennae, celestial visor).
   - Reactive states: 'idle' | 'hover' | 'thinking' | 'talking' | 'celebrating' | 'sleeping'.
   - Sizes: 'xs' (24px), 'sm' (32px), 'md' (44px), 'lg' (64px), 'xl' (96px) or custom numeric.
   - Interactive hover, aura, click handlers, ARIA labels (`aria-label="Cosmo Assistant Mascot"`).
3. Implement `src/components/mascot/CosmoLauncher.tsx`:
   - Floating action button / launcher housing the interactive `<CosmoMascot />`.
   - Responsive, clean styling with hover elevation and unread badge / tooltip if provided.
   - Adheres strictly to Cosmo Notebook design tokens.
4. Verify your implementation:
   - Run `node scripts/check-tokens.mjs` (must pass with 0 errors).
   - Run `npx tsc -p tsconfig.app.json --noEmit` (must pass with 0 errors).
   - Run `node --test tests/*.test.mjs` (must pass cleanly).
5. Document changes and test results in f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m1\handoff.md and notify orchestrator via send_message.
