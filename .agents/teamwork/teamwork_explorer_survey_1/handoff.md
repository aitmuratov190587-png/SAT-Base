# Architectural, Layout & Build Systems Survey Report

**Explorer Identity**: `teamwork_explorer_survey_1`  
**Focus Area**: Architecture, Layout, Build Systems & Design System Integration Points  
**Date**: 2026-11-07  

---

## 1. Observations

### 1.1 Framework, Tooling & Dependencies
- **Root Config & Package Manifest** (`package.json:1-32`):
  ```json
  "name": "satbase",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "test": "node --test tests/core.test.mjs tests/analytics.test.mjs",
    "check:tokens": "node scripts/check-tokens.mjs",
    "typecheck": "tsc -p tsconfig.app.json --noEmit --incremental false",
    "build": "node scripts/check-tokens.mjs && tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.115.0",
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "typescript": "^5.6.3",
    "vite": "^6.0.1"
  }
  ```
- **Framework Type**: Single Page Application (SPA) driven by Vite 6.0.1, React 18.3.1, and React Router DOM 6.28.0. It is **not** Next.js.
- **Node & npm Runtime Environment**:
  - Node is installed at `F:\Batyrbaev\node.exe` (v24.16.0) and npm is at `F:\Batyrbaev\npm.cmd` (v11.13.0).
  - Executing commands requires `$env:PATH = "F:\Batyrbaev;$env:PATH"`.
- **Test Suite**:
  - Test runner is the Node.js native test runner (`node --test tests/*.test.mjs`).
  - Running `$env:PATH = "F:\Batyrbaev;$env:PATH"; node --test tests/*.test.mjs` ran 36 tests across 6 files (`analytics.test.mjs`, `core.test.mjs`, `insights.test.mjs`, `onboarding.test.mjs`, `planner.test.mjs`, `tutor.test.mjs`).
  - Output: `ℹ pass 36, fail 0, duration_ms 412.8ms`.
- **Build & Quality Gates**:
  - `npm run check:tokens`: `[PASS] check:tokens: 0 forbidden classes found. All components strictly adhere to Cosmo Notebook design tokens.`
  - `npm run typecheck`: `tsc -p tsconfig.app.json --noEmit --incremental false` passed with exit code 0 and zero errors.
  - `npm run build`: `node scripts/check-tokens.mjs && tsc -b && vite build` built 1709 modules in 2.86s with exit code 0.

---

### 1.2 Layout & Routing Structure
- **App Entry Point & Providers** (`src/main.tsx:17-25`):
  ```tsx
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AuthProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </AuthProvider>
    </StrictMode>,
  );
  ```
  `AuthProvider` and `AppProvider` wrap the entire `<App />`. `AppProvider` (`src/contexts/AppContext.tsx:109-128`) contains global states:
  - `isAITutorOpen: boolean`
  - `tutorContext?: TutorContext`
  - `tutorInitialMessage?: string`
  - `openAITutor: (context?: TutorContext, initialMessage?: string) => void`
  - `closeAITutor: () => void`

- **Route Distribution** (`src/App.tsx:47-120`):
  1. *Public Standalone Routes*:
     - `/login` (`LoginPage`)
     - `/welcome` (`WelcomeLanding`)
     - `/design-system` (`DesignSystemPage`, DEV only)
  2. *Full-Screen Test / Practice Routes* (Wrapped in `ProtectedRoute`, rendered outside `DashboardLayout`):
     - `/practice/cross-text` (`TopicPracticeArena`)
     - `/practice/:topicId` (`TopicPracticeArena`)
     - `/mock-tests/flashrush` (`FlashRushMockTest`)
     - `/mock-tests/flashrush/results` (`FlashRushResults`)
  3. *Dashboard Layout Routes* (Wrapped in `DashboardLayout`):
     - `/` (`Dashboard`)
     - `/questions` (`QuestionBank`)
     - `/mock-tests` (`MockTests`)
     - `/study-planner`, `/study-plan` (`StudyPlan`)
     - `/analytics` (`Analytics`)
     - Placeholders with `ComingSoonPage`: `/classroom`, `/challenges`, `/ai-tutor`, `/saved`, `/settings`, `/help`
  4. *Catch-All*: `*` (`NotFoundPage`)

- **Dashboard Layout Structure** (`src/layouts/DashboardLayout.tsx:26-64`):
  - Desktop Navigation: `AppSidebar` fixed on left (`left-0 top-0 h-full w-[248px]` expanded, `w-[64px]` collapsed, `z-40`).
  - Top Bar: `AppHeader` sticky top (`top-0 z-30 h-14 bg-surface/90 backdrop-blur-md border-b border-line px-4 sm:px-6`).
  - Content Outlet: `flex-1 p-4 sm:p-6 lg:p-8 max-w-[1480px] mx-auto w-full page-transition pb-24 md:pb-8 flex flex-col`.
  - Mobile Navigation: `MobileTabBar` fixed at bottom (`fixed bottom-0 left-0 right-0 z-40 h-16 bg-paper-2/95 backdrop-blur-md border-t border-line`). Spacer `h-16 md:hidden` is reserved at the bottom of the main container.
  - Drawer Mounting: `AITutorDrawer` (`src/components/ai/AITutorDrawer.tsx`) is rendered at the root of `DashboardLayout.tsx`.

- **Current AI Tutor Redundancy / Fragmentation**:
  - `AITutorDrawer` is mounted in three separate locations:
    1. `DashboardLayout.tsx:57-62` (driven by `useApp()`)
    2. `TopicPracticeArena.tsx:1051-1055` (driven by local state `isTutorOpen`)
    3. `FlashRushResults.tsx:790` (driven by local state `isTutorOpen`)
  - Full-screen views (`TopicPracticeArena` and `FlashRushMockTest`) do not inherit `DashboardLayout`.
  - On `/mock-tests/flashrush`, official exam conditions apply, and AI tutor requests are strictly rejected (`tests/tutor.test.mjs:18-29`).

---

### 1.3 Strict Design System Rules & Tokens
- **Token Linter Script** (`scripts/check-tokens.mjs:10-23`):
  Enforces zero forbidden classes in `src/**/*.{tsx,ts,jsx,js,css}`:
  1. *Numbered accent/primary/brand scales*: `\b(?:bg|text|border|ring|fill|stroke|from|to|via)-(?:accent|primary|brand)-\d+\b`
  2. *Tailwind default palettes*: `slate|gray|zinc|neutral|stone|indigo|purple|violet|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|rose|pink|fuchsia` (with `-50` through `-950`).
  3. *Hardcoded hex utilities*: `\b(?:bg|text|border|ring|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]`.
  *Any code using standard Tailwind colors fails `npm run build` immediately.*

- **Design System Tokens** (`src/index.css` & `tailwind.config.js`):
  - Philosophy: "Cosmo Notebook" — Editorial notebook meets star-map. Warm paper, ink typography, single Signal Orange accent (`#FF5B2E`).
  - Colors:
    - Canvas/Surface: `bg-paper`, `bg-surface`, `bg-paper-2`.
    - Ink Typography: `text-ink` (primary), `text-ink-2` (secondary graphite), `text-ink-muted` (captions/labels).
    - Borders: `border-line` (default subtle), `border-line-strong` (interactive).
    - Signal Orange: `bg-accent`, `text-accent`, `border-accent`, `hover:bg-accent-hover`, `bg-accent/10`, `bg-accent-subtle`.
    - Editorial Accents: `cobalt`, `moss`, `mustard`, `berry`.
  - Typography:
    - `font-display` / `font-serif`: `Fraunces` (variable serif for headings and hero cards).
    - `font-sans`: `Instrument Sans` (modern clean grotesque for body, UI, buttons).
    - `font-mono`: `JetBrains Mono` (numbers, scores, formulas, ELO deltas, badges).
  - Formulas: KaTeX standard (`<KatexMath />`, `<FormattedMathText />`).

---

### 1.4 Mascot Assets & Animation Status
- **Available Mascot Graphic Assets**:
  - `public/images/avatar-blue.png` (Base blue Cosmo mascot)
  - `public/images/avatar/avatar-logo.png` (Logo icon)
  - `public/images/avatar/avatar-focus.png` (Focus / analytical / thinking pose)
  - `public/images/avatar/avatar-study.png` (Reading / studying pose)
  - `public/images/avatar/avatar-celebrate.png` (Celebration / win / high score pose)
  - `public/cosmo-motion.html` (High-definition canvas animation engine with 60 FPS particles, glowing orbital rings, and warp trails)
- **Animation Discrepancy Found**:
  - Multiple components across the codebase (`Dashboard.tsx:287`, `EmptyState.tsx:41`, `AppSidebar.tsx:77`, `StudyLoadingScreen.tsx:10`, `ErrorBoundary.tsx:44`) use the CSS class `animate-float`.
  - However, neither `tailwind.config.js` nor `src/index.css` defines `@keyframes float` or `animate-float`!
  - `tailwind.config.js:93-96` only defines `'fade-in'` and `'slide-up'`.
  - As a result, the mascot images are currently static rather than floating.

---

## 2. Logic Chain

1. **Vite SPA Architecture**:
   - Because SAT-Base is a client-side React SPA (Vite + React Router DOM v6) wrapped in `AppProvider` at `src/main.tsx`, application state (`AppContext`) is universally preserved across all route transitions without full-page reloads.

2. **Integration Point Analysis**:
   - Currently, `AITutorDrawer` is placed at the bottom of `DashboardLayout.tsx`. If a user navigates to `/practice/cross-text` or `/practice/:topicId`, `DashboardLayout` is not rendered.
   - If a persistent Cosmo floating widget or dock is mounted inside `DashboardLayout`, it disappears on practice and mock test screens.
   - Mounting the universal assistant component inside `src/App.tsx` (within `<BrowserRouter>` and `<AppProvider>`) guarantees presence across 100% of the platform while allowing route-based behavior:
     - On `/mock-tests/flashrush`: detects exam route via `useLocation().pathname` and automatically transitions into a quiet "Exam Mode" (dimmed or sleeping mascot badge indicating Cosmo is resting during official tests).
     - On `/practice/:topicId`: connects to the active question context (hints, question text, passage, choices) provided by `useApp().openAITutor(context)`.
     - On `/` and other dashboard views: provides quick interactive access, hints, score guidance, and study assistance.

3. **Collision Avoidance Logic**:
   - On Desktop (`md:` and above):
     - `AppSidebar` takes `left-0` with `w-[248px]` or `w-[64px]` (`z-40`).
     - `AppHeader` takes `top-0` (`z-30`).
     - The bottom-right corner (`bottom-6 right-6`) is completely open across all dashboard views.
     - On views with `BluebookFooter` (`src/components/bluebook/BluebookFooter.tsx:46`), the footer is `fixed bottom-0 left-0 right-0 h-15 z-40`. An element at `bottom-6` would collide with the "Next" / "Review" button. Thus, on practice views, it must sit at `bottom-20` (80px), or trigger directly through the existing `BluebookFooter` "Ask AI Tutor" button (`BluebookFooter.tsx:160`).
   - On Mobile (`< 768px`):
     - `MobileTabBar` (`src/components/navigation/MobileTabBar.tsx:37`) is `fixed bottom-0 left-0 right-0 z-40 h-16` (64px).
     - Any floating widget placed at `bottom-4` directly overlaps the bottom navigation icons.
     - Following the pattern in `QuestionBank.tsx:660` (`bottom-20 md:bottom-8`), the floating Cosmo widget must use `bottom-20 md:bottom-6 right-4 sm:right-6`.
     - When `AITutorDrawer` is opened (`z-50`), it covers the bottom `88vh`. The floating mascot button should smoothly fade out (`opacity-0 pointer-events-none`) when the drawer is open.

4. **Mascot Animation Architecture**:
   - The interactive mascot (Requirement R2) can combine the stateful asset set (`avatar-blue.png`, `avatar-focus.png`, `avatar-celebrate.png`, `avatar-study.png`) with defined CSS motion keyframes (`float`, `pulse-glow`, `bounce-gentle`).
   - Defining `@keyframes float` in `src/index.css` immediately activates animated floating across both the new Cosmo widget and all 5 existing mascot touchpoints (`Dashboard`, `EmptyState`, `Sidebar`, `LoadingScreen`, `ErrorBoundary`).

5. **Token Compliance Protection**:
   - Any new component or styling for Cosmo must strictly avoid default Tailwind color classes (e.g. `bg-blue-600`, `text-gray-400`) and hex values (`bg-[#...]`) to satisfy `scripts/check-tokens.mjs`. It must strictly use `bg-paper`, `bg-surface`, `bg-paper-2`, `text-ink`, `text-ink-2`, `text-accent`, and `border-line`.

---

## 3. Caveats

1. **Node in Non-Standard Path**: Node.js and npm are not in the default Windows system PATH; they reside in `F:\Batyrbaev\`. Subagents and build commands must prepend `$env:PATH = "F:\Batyrbaev;$env:PATH"` in powershell sessions.
2. **Mock Test Exam Integrity Policy**: Per SATBase AI guidelines (`SATBASE_AI_SYSTEM_GUIDE.md`) and unit test specifications (`tests/tutor.test.mjs`), Cosmo AI is strictly prohibited during full-length mock tests (`/mock-tests/flashrush`). The universal widget must respect this constraint by muting/disabling itself during mocks.
3. **No Radix/Framer Motion Dependencies**: `package.json` contains only `react`, `react-dom`, `react-router-dom`, `@supabase/supabase-js`, and `lucide-react`. Complex animations should rely on pure CSS / SVG / Canvas rather than introducing heavy uninstalled motion libraries, ensuring bundle size and performance remain optimal.

---

## 4. Conclusion & Recommendations

1. **Mounting Architecture**:
   Mount a root-level `<CosmoUniversalAssistant />` in `src/App.tsx` directly inside `<BrowserRouter>`. This gives Cosmo universal platform presence without duplicating code across `DashboardLayout`, `TopicPracticeArena`, and `FlashRushResults`.
2. **Unified Context Management**:
   Consolidate all tutor triggers onto `AppContext` (`openAITutor`, `closeAITutor`, `tutorContext`), deprecating duplicate local state in `TopicPracticeArena` and `FlashRushResults`.
3. **Responsive Positioning Specification**:
   - Floating Mascot FAB / Dock: `fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40`.
   - Z-Index hierarchy:
     - Header: `z-30`
     - Sidebar & MobileTabBar: `z-40`
     - Floating Cosmo Mascot: `z-40` (with `bottom-20` on mobile to clear `MobileTabBar`)
     - Drawer & Modals: `z-50`
   - Floating widget automatically hides when `isAITutorOpen === true`.
4. **Mascot Reactivity & Animation Engine**:
   - Implement stateful transitions for Cosmo:
     - `idle`: gentle float using `avatar-blue.png` + `@keyframes float`.
     - `hover`: subtle scale up (`scale-105`), curious tilt, accent aura ring.
     - `thinking`: switch image to `avatar-focus.png` or show orbiting particles.
     - `talking` / `active`: lively gentle bounce with speech ripple.
     - `celebrate`: `avatar-celebrate.png` upon completing practice sessions or achieving score milestones.
     - `exam_mode`: subdued resting state on `/mock-tests/flashrush`.
   - Add `@keyframes float` to `src/index.css` to fix existing broken `animate-float` across the app.
5. **Design System & Linter Strictness**:
   All new components must exclusively use the Cosmo Notebook tokens (`paper`, `surface`, `paper-2`, `ink`, `ink-2`, `ink-muted`, `accent`, `border-line`) to ensure 100% compliance with `scripts/check-tokens.mjs`.

---

## 5. Verification Method

To independently verify all findings and test future implementations:

1. **Run Full Test Suite**:
   ```powershell
   $env:PATH = "F:\Batyrbaev;$env:PATH"; node --test tests/*.test.mjs
   ```
   *Expected*: All 36 tests pass cleanly.

2. **Verify Token Compliance**:
   ```powershell
   $env:PATH = "F:\Batyrbaev;$env:PATH"; npm run check:tokens
   ```
   *Expected*: `[PASS] check:tokens: 0 forbidden classes found.`

3. **Verify TypeScript Typecheck**:
   ```powershell
   $env:PATH = "F:\Batyrbaev;$env:PATH"; npm run typecheck
   ```
   *Expected*: Exit code 0, zero diagnostic errors.

4. **Run Production Build**:
   ```powershell
   $env:PATH = "F:\Batyrbaev;$env:PATH"; npm run build
   ```
   *Expected*: Successfully bundles with Vite in ~3s.

5. **Visual & Responsive Inspection**:
   - Inspect desktop view at `>= 1024px`: ensure Cosmo FAB sits at `bottom-6 right-6`, clear of sidebar and header.
   - Inspect mobile viewport at `375px`: ensure Cosmo FAB sits at `bottom-20 right-4`, exactly 16px above `MobileTabBar` (`h-16`), with zero overlap or blocked touch targets.
   - Navigate to `/mock-tests/flashrush`: verify Cosmo indicates quiet exam mode.
   - Navigate to `/practice/:topicId`: verify question context links into Cosmo tutor drawer.
