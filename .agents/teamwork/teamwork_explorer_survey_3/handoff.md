# Handoff Report: Interactive Animated Mascot & Chat UI (Cosmo AI Assistant)

**Author:** Survey Explorer 3 (`teamwork_explorer_survey_3`)  
**Mission:** Investigation into animation stack, interactive animated mascot representation ("Cosmo"), chat UI/UX architecture, quick action pills, accessibility, and automated testing strategy.  
**Date:** 2026-11-07  
**Status:** Hard Handoff (Investigation Complete)

---

## 1. Observation

### 1.1 Dependency & Animation Ecosystem
- **`package.json`** (`file:///f:/Batyrbaev/SAT-Base/package.json`, lines 14–30):
  - Dependencies:
    - `"@supabase/supabase-js": "^2.115.0"`
    - `"lucide-react": "^0.460.0"`
    - `"react": "^18.3.1"`
    - `"react-dom": "^18.3.1"`
    - `"react-router-dom": "^6.28.0"`
  - DevDependencies:
    - `"@vitejs/plugin-react": "^4.3.4"`
    - `"tailwindcss": "^3.4.15"`
    - `"typescript": "^5.6.3"`
    - `"vite": "^6.0.1"`
  - Neither `framer-motion` nor any Lottie library (`lottie-web`, `lottie-react`) is installed in `package.json` or present in `node_modules`.
- **`tailwind.config.js`** (`file:///f:/Batyrbaev/SAT-Base/tailwind.config.js`, lines 93–106):
  - Only two custom animations are configured in Tailwind:
    ```js
    animation: {
      'fade-in': 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      'slide-up': 'slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    ```
- **`src/index.css`** (`file:///f:/Batyrbaev/SAT-Base/src/index.css`):
  - Contains keyframe animations for `@keyframes skeleton-shimmer`, `@keyframes page-enter`, and `@keyframes pen-stroke`.
  - Defines `.mascot-float` at line 391:
    ```css
    .mascot-float {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
    }
    ```
  - Strictly enforces `@media (prefers-reduced-motion: reduce)` at lines 398–406:
    ```css
    @media (prefers-reduced-motion: reduce) {
      *,
      ::before,
      ::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    ```
- **Missing Animation Definition:**
  - The class `animate-float` is currently referenced on mascot images in 5 active components:
    1. `src/pages/Dashboard.tsx` (line 287): `className="w-24 h-24 sm:w-32 sm:h-32 object-contain animate-float select-none pointer-events-none"`
    2. `src/components/StudyLoadingScreen.tsx` (line 10): `className="h-14 w-14 object-contain animate-float"`
    3. `src/components/ErrorBoundary.tsx` (line 44): `className="relative z-10 w-24 h-24 object-contain animate-float pointer-events-none"`
    4. `src/components/ui/EmptyState.tsx` (line 41): `className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 object-contain animate-float select-none pointer-events-none"`
    5. `src/components/navigation/AppSidebar.tsx` (line 77): `className="w-8 h-8 object-contain animate-float select-none pointer-events-none group-hover:rotate-6 transition-transform"`
  - However, `animate-float` has **no keyframe definition** in either `tailwind.config.js` or `src/index.css`. Consequently, elements with `animate-float` currently remain static.

### 1.2 Design System Tokens & Quality Gates
- **`scripts/check-tokens.mjs`** (`file:///f:/Batyrbaev/SAT-Base/scripts/check-tokens.mjs`, lines 6–23):
  - Strictly enforces Cosmo Notebook tokens. Forbidden class patterns:
    1. Numbered accent/primary/brand scales (`bg-primary-500`, `text-accent-600`)
    2. Default Tailwind palettes (`bg-slate-100`, `text-blue-500`, `border-gray-200`)
    3. Hardcoded hex utilities (`bg-[#...]`, `text-[#...]`)
  - Permitted color tokens:
    - Backgrounds: `bg-paper`, `bg-surface`, `bg-paper-2`
    - Text: `text-ink`, `text-ink-2`, `text-ink-muted`
    - Lines/Borders: `border-line`, `border-line-strong`
    - Single Signal Accent: `bg-accent`, `text-accent`, `bg-accent-subtle`, `hover:bg-accent-hover`
    - Editorial palette: `cobalt`, `moss`, `mustard`, `berry`
  - Typography classes: `.text-display`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-body`, `.text-small`, `.text-mono-num`.
  - Radii: `rounded-[var(--radius-sm)]` (10px), `rounded-[var(--radius-md)]` (14px), `rounded-[var(--radius-lg)]` (22px).

### 1.3 Existing Assistant & Mascot Architecture
- **Existing Mascot Visual Assets:**
  - PNG files in `public/images/`:
    - `public/images/avatar-blue.png` (used as the primary Cosmo mascot avatar throughout the app).
    - `public/images/avatar/avatar-celebrate.png`, `avatar-focus.png`, `avatar-study.png`, `avatar-logo.png`.
  - Vector SVG specification found in repository artifacts (`F:\Batyrbaev\SATBase-AI - ...\sat_avatars.js`, lines 112–165):
    - Defines Cosmo as the round azure cosmic guide with circular helmet (`#64B5F6`), starry sky background, glowing pink-tipped antennae (`#F48FB1`), expressive dark blue eyes (`#0D47A1`) with white circular pupil catchlights, and a warm friendly smile.
- **Existing Chat Assistant (`src/components/ai/AITutorDrawer.tsx`):**
  - Rendered as a slide-over drawer on desktop (`md:w-[440px] md:h-full md:border-l`) and bottom sheet on mobile (`h-[88vh] bottom-0 rounded-t-2xl border-t`).
  - Integrated via `DashboardLayout.tsx` (lines 57–62), but currently **lacks a floating launcher button** on screens; can only be triggered via the sidebar button or mobile top bar.
  - Tightly coupled to Socratic Question Mode (`practice` and `results` with `hintLevel 0..3`). It currently does NOT offer universal platform navigation, math formula assistance, or general study strategy prompts when `questionId` is absent.
- **Layout Constraints & Collisions:**
  - `src/components/navigation/MobileTabBar.tsx` (lines 35–38): Fixed mobile bottom tab bar is `h-16` (`64px`) on `<768px`.
  - In `DashboardLayout.tsx` (line 49): A reserve spacer `<div className="h-16 md:hidden shrink-0" />` prevents content overlap.
  - Any bottom-fixed floating assistant bubble must clear `h-16` on mobile: `bottom-20` (`80px`) on mobile vs `bottom-6` (`24px`) on desktop.

### 1.4 Test Infrastructure
- Node.js environment: Node v24.16.0 located at `F:\Batyrbaev\node.exe`.
- Running `node --test tests/*.test.mjs` executes 36 tests across 6 suites in ~440ms with 100% pass rate.
- Test runner uses Node built-in `node:test` + `node:assert/strict` and on-the-fly TypeScript bundling via `esbuild`. No Jest or Vitest dependencies exist.

---

## 2. Logic Chain

### 2.1 Animation Technology Selection: Pure SVG + CSS Keyframes vs Framer Motion
- *Premise 1:* `framer-motion` is not installed; installing it would introduce ~35–45KB gzipped bundle overhead, potential peer-dependency complexities with React 18, and mocking hurdles in Node test runner (`node:test`).
- *Premise 2:* Canvas/WebGL solutions are opaque to assistive technologies (screen readers cannot inspect canvas sub-elements) and are heavy for mascot UI avatars.
- *Premise 3:* Semantic SVG styled with pure CSS keyframes and transitions offers:
  1. Zero bundle weight addition (0 KB new npm dependencies).
  2. Sub-pixel vector crispness across all screen densities (retina, mobile, 4K).
  3. Discrete component-level control: outer floating physics, orbital ring rotation, dynamic eye gazes/blinks, mouth shape morphing, and antenna energy pulses.
  4. Immediate, robust support for `@media (prefers-reduced-motion: reduce)`.
  5. Flawless compatibility with the project's `check:tokens` script and Node `esbuild` testing pipeline.
- *Conclusion 1:* Build the interactive animated mascot as a native React SVG component (`<CosmoMascot />`) paired with lightweight CSS keyframes declared directly in `src/index.css` (or `tailwind.config.js`).

### 2.2 Mascot Visual Personality & State Machine Design
- *Premise 4:* The character Cosmo represents the "High-Score Explorer" and "Cosmic Study Guide" in the Cosmo Notebook design system.
- *Premise 5:* R2 requires an interactive, animated visual mascot that visibly reacts to user interaction and assistant states (idle, hover, thinking, talking/answering).
- *Deduction:* Construct a finite state machine (`MascotState`: `'idle' | 'hover' | 'thinking' | 'talking' | 'celebrating' | 'sleeping'`):
  - **`'idle'` State:**
    - Floating: Sine wave bobbing (`translateY(0)` -> `translateY(-6px)` -> `translateY(0)` over 3.2s infinite `ease-in-out`).
    - Breathing: Soft scale oscillation (`scale(1.0)` -> `scale(1.025)`).
    - Blinking: Natural periodic eye closure (open 3.8s, closed 140ms).
    - Orbit: Gentle planetary ring rotation (12s per revolution).
    - Gaze: Calm, attentive forward gaze with serene resting smile.
  - **`'hover'` State (Cursor Hover on Launcher or Mascot):**
    - Alertness: Instant perk-up (`translateY(-8px) scale(1.08)` via 200ms cubic-bezier transition).
    - Eyes: Widen slightly with dual star-burst catchlights.
    - Smile: Expands into an open delighted smile.
    - Antennae: Antenna tips glow in Signal Orange (`drop-shadow(0 0 8px var(--color-accent))`).
    - Orbit: Accelerates smoothly.
  - **`'thinking'` State (When AI query is in flight / Edge Function processing):**
    - Head: Curious 7-degree head tilt.
    - Eyes: Gaze shifts to top-right corner with slight inquisitive squint.
    - Mouth: Thoughtful small circle / 'o' shape.
    - Orbit: Fast computation spin (1.6s per rev) with bright orbital particle.
    - Halo: Pulsing cosmic aura in Signal Orange & Cobalt (`opacity 0.35` -> `0.8`).
    - Antennae: Alternating pulse rhythm.
  - **`'talking'` / Answering State (When streaming response or displaying assistant reply):**
    - Gesture: Leaning slightly forward (`translateY(-4px)`).
    - Mouth: Synchronized speaking waveform animation (subtle multi-frame height cycle 280ms).
    - Soundwaves: Subtle expanding speech waves / celestial rings radiating outward.
    - Eyes: Warm, expressive blinks and micro-glances.
  - **`'celebrating'` State (Streak, high score, topic mastered):**
    - Joyful jump (`translateY(-12px) rotate(6deg)`).
    - Eyes form happy inverted arcs (`^ ^`).
    - Micro star-burst sparkles emit around Cosmo.
  - **`'sleeping'` State (Mock test active):**
    - Sleepy line eyes (`- -`).
    - Slow calm breathing cycle (4.5s).
    - Floating 'z' indicators, cleanly communicating that Cosmo is resting to uphold test integrity.

### 2.3 Universal Assistant UI/UX Architecture (R1 & R3)
- *Premise 6:* Currently `AITutorDrawer` is hidden unless explicitly triggered and is constrained to question-specific hint ladders.
- *Premise 7:* R1 mandates a universal assistant answering questions across all SATBase domains (Math, Reading & Writing, test strategies, score analysis, and platform features).
- *Premise 8:* R3 mandates seamless platform integration on desktop and mobile without layout collisions.
- *Deduction:*
  1. **Dual-Mode Mascot Placement:**
     - **Floating Launcher Bubble (`CosmoLauncher`):** Rendered globally in `DashboardLayout.tsx`.
       - Desktop: `fixed bottom-6 right-6 z-40`.
       - Mobile: `fixed bottom-20 right-4 z-40` (safely clearing the 64px `MobileTabBar`).
       - Features the live animated Cosmo mascot (44px) inside a circular glassmorphic pill button with subtle hover elevation and keyboard shortcut hint (`Alt+C` or click).
     - **Expanded Assistant Panel (`CosmoAssistantPanel`):**
       - Desktop: Slide-over drawer on right edge (`w-[440px] h-full shadow-notebook fixed right-0 top-0 bottom-0 z-50`).
       - Mobile: Bottom-sheet modal (`h-[88vh] inset-x-0 bottom-0 rounded-t-2xl z-50 shadow-2xl`).
       - Header features a live synchronized mini mascot (36px) reflecting the current assistant state in real time.
  2. **Smart Quick Action Pills:**
     - When opened in **Global / Dashboard mode** (`context.mode === 'general'` or unattached):
       - 💡 *"Explain this concept"* (triggers prompt picker for core SAT concepts).
       - 📐 *"Math formula helper"* (instant formula reference sheet).
       - ⚡ *"Desmos shortcuts"* (top regression and graphing tricks).
       - 🎯 *"Test pacing strategy"* (time allocation per module).
       - 🧭 *"Platform tour"* (guide to mocks, topic arena, and study plan).
       - 📊 *"Score analysis"* (guidance based on current SA-ELO and streak).
     - When opened in **Question Practice / Results mode** (`practice` / `results`):
       - Preserves the existing Socratic ladder: *"Give me hint 1/2/3"*, *"Check my step"*, *"Explain concept"*, and *"Full solution"*.
  3. **Accessibility & Reduced Motion:**
     - Full ARIA compliance: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="cosmo-dialog-title"`, `aria-live="polite"` on message list.
     - Keyboard navigation: `Escape` key closes drawer; focus returns to launcher button; `Tab` cycle trapped inside dialog.
     - Respects `prefers-reduced-motion: reduce`: sets animation durations to `0.01ms`, disables floating/orbit rotations, and presents static expressive mascot illustrations.

### 2.4 Testing Strategy
- *Premise 9:* The project standard is Node's built-in test runner (`node:test`) compiled via `esbuild`.
- *Conclusion 2:* Implement automated tests in `tests/cosmoAssistant.test.mjs` verifying:
  1. Mascot state machine transitions and fallback states.
  2. Universal query validator supporting platform, math, and reading queries.
  3. Mock test mode isolation (guaranteeing assistant is disabled during exams).
  4. Quick action catalog validation (all action items have valid prompts and categories).
  5. Token compliance via `npm run check:tokens` and TypeScript types via `npm run typecheck`.

---

## 3. Caveats

1. **Active Mock Test Isolation:**
   - AI assistance must remain strictly locked during active full-length mock tests (`/mock-tests/flashrush`) to maintain College Board test authenticity. Cosmo in this mode displays the `'sleeping'` state with an informative explanation banner.
2. **Quota & Rate Limiting:**
   - The Supabase backend enforces a 30 messages/day quota via `public.ai_usage`. The UI must clearly display remaining messages and handle `limit_reached` gracefully with friendly messaging.
3. **KaTeX Math Rendering:**
   - Mathematical expressions rendered in assistant responses rely on `window.katex` (loaded via CDN/index.html) with graceful fallback to `font-serif` math typography via `KatexMath.tsx`.
4. **Token Linter Strictness:**
   - Any new SVG or UI component MUST adhere strictly to Cosmo Notebook design tokens (`paper`, `surface`, `paper-2`, `ink`, `line`, `accent`, `cobalt`, `mustard`, `moss`, `berry`). No numbered Tailwind scale classes (e.g. `bg-blue-500`, `text-gray-400`) may be introduced.

---

## 4. Conclusion

1. **Animation Technology Recommendation:**
   Implement Cosmo Mascot as a zero-dependency, pure SVG React component (`CosmoMascot.tsx`) driven by standard CSS keyframes in `src/index.css`. Avoid adding `framer-motion` or Lottie to maintain minimal bundle size, instant startup, and seamless compatibility with the project's testing setup.
2. **Fix Missing Keyframes:**
   Formally define `@keyframes float` and the utility `.animate-float` in `src/index.css` so that existing and new mascot elements float smoothly across the application.
3. **Mascot Character Blueprint:**
   Build the vector SVG based on Cosmo the Azure Cosmic Explorer, featuring:
   - Outer atmospheric orbital ring with orbiting star.
   - Dual peach-tipped luminous antennae.
   - Expressive celestial visor with dynamic eyes, eyelids, pupils, and smile.
   - Six interactive states: `idle`, `hover`, `thinking`, `talking`, `celebrating`, and `sleeping`.
4. **Universal Assistant UI/UX:**
   - Deploy `CosmoLauncher` as a fixed floating button at `bottom-6 right-6` (desktop) and `bottom-20 right-4` (mobile, avoiding `MobileTabBar`).
   - Upgrade `AITutorDrawer` into `CosmoAssistantDrawer` supporting both universal platform inquiries and contextual Socratic question guidance.
   - Introduce 6 universal quick action pills for instant student guidance.
5. **Testing Suite:**
   Add `tests/cosmoAssistant.test.mjs` running under `node --test` to provide complete automated coverage for mascot state transitions, universal query validation, mock mode locking, and quick action catalogs.

---

## 5. Verification Method

To independently verify all findings and confirm the project baseline:

1. **Verify Existing Automated Test Suite:**
   ```powershell
   & "F:\Batyrbaev\node.exe" --test tests/*.test.mjs
   ```
   *Expected result:* 36 tests pass cleanly across all 6 test suites.

2. **Verify Cosmo Notebook Design Token Compliance:**
   ```powershell
   & "F:\Batyrbaev\node.exe" scripts/check-tokens.mjs
   ```
   *Expected result:* `[PASS] check:tokens: 0 forbidden classes found.`

3. **Verify TypeScript Typecheck:**
   ```powershell
   $env:PATH = "F:\Batyrbaev;" + $env:PATH
   npx tsc -p tsconfig.app.json --noEmit --incremental false
   ```
   *Expected result:* 0 type errors.

4. **Verify Mascot State Definitions in Codebase:**
   Inspect `src/components/StudyLoadingScreen.tsx`, `src/pages/Dashboard.tsx`, and `src/components/navigation/AppSidebar.tsx` to verify usage of `animate-float` and `avatar-blue.png`.

5. **Invalidation Conditions:**
   - If `framer-motion` is added to `package.json`, bundle size and Node test runner compatibility must be re-evaluated.
   - If `MobileTabBar` height or mobile navigation structure changes, the floating launcher offset (`bottom-20`) must be adjusted.
