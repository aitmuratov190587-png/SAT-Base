# Cosmo Notebook Design System & Architectural Rules

> **Concept**: "Cosmo Notebook" — Editorial notebook meets star-map.
> Warm paper backgrounds, rich ink-dark typography, and a single vibrant accent: **Signal Orange (`#FF5B2E`)**.
> 
> **Anti-Pattern Warning**: This platform is NOT a generic AI SaaS.
> No pastel blue/purple gradients, no glassmorphism or glowing backdrop-blurs, no floating gradient blobs, no identical white rounded cards repeated in grids.

---

## 1. Typography

| Role | Font Family | Usage |
| :--- | :--- | :--- |
| **Display & Headings** | `Fraunces`, serif | Page titles, section headings, hero text, milestone titles, modal headers. Variable optical size & soft serif character. |
| **Body & UI** | `Instrument Sans`, sans-serif | Navigation, buttons, body copy, explanations, choices, instructions, labels, metadata. Clean, modern editorial grotesque. |
| **Numeric & Telemetry** | `JetBrains Mono`, monospace | **ONLY** for scores (1540), timers (31:42), question indices (12/20), percentages (88%), and algebraic notation. |

> [!IMPORTANT]
> All other fonts (`Inter`, `Merriweather`, `Poppins`, `Plus Jakarta Sans`, etc.) are prohibited and must be removed.
> Do **NOT** use uppercase letter-spaced micro-labels (`tracking-widest text-[9px] uppercase`) as the standard labeling style across the interface. Use them at most **once** per page (e.g., as a solitary section kicker).

---

## 2. Color Palette & Design Tokens

All colors, radiuses, and shadows must strictly come from CSS custom properties (`var(--token)`). Hardcoded hex color codes in component JSX/TSX are strictly forbidden.

### Core Token Mappings

Both themes are controlled via `[data-theme="light"]` and `[data-theme="dark"]` on `<html>` / `<body>`.

```css
:root, [data-theme="light"] {
  /* Canvas & Paper */
  --bg-canvas: #FBF8F3;         /* Warm editorial cream / newsprint paper */
  --bg-surface: #FFFFFF;        /* Crisp card surface */
  --bg-subtle: #F3ECE2;         /* Warm muted container background */
  --bg-muted: #EBE3D5;          /* Inactive tabs, subtle dividers */

  /* Ink & Typography */
  --ink-primary: #181511;       /* Deep editorial ink black */
  --ink-secondary: #574F44;     /* Warm graphite secondary text */
  --ink-muted: #8C8274;         /* Caption, tertiary metadata */
  --ink-inverse: #FBF8F3;       /* High-contrast text on dark/accent */

  /* Primary Signal Accent (ONE ACCENT ONLY) */
  --accent-signal: #FF5B2E;     /* Signal Orange */
  --accent-hover: #E4481C;      /* Signal Orange hover */
  --accent-subtle: #FFF0EB;     /* Soft peach wash for active highlights */
  --accent-border: #FFD4C7;     /* Signal accent border */

  /* Structural Borders */
  --border-subtle: #E8E0D2;     /* Default paper border (1px solid) */
  --border-strong: #D1C4B0;     /* Focused, interactive border */
  --border-dark: #181511;       /* Sharp editorial line / underline */

  /* Semantic Feedback */
  --success-ink: #1B5E3B;
  --success-bg: #EDF7F1;
  --success-border: #B7E4C7;
  --error-ink: #A62617;
  --error-bg: #FDEDEB;
  --error-border: #F7BFB9;
  --warning-ink: #8A5B00;
  --warning-bg: #FFF8E6;
  --warning-border: #FCE199;

  /* Elevation & Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 18px;
  --shadow-notebook: 0 1px 3px rgba(24, 21, 17, 0.05), 0 6px 16px rgba(24, 21, 17, 0.03);
}

[data-theme="dark"] {
  /* Dark Star-Map / Deep Ink */
  --bg-canvas: #0F1115;         /* Deep cosmic charcoal */
  --bg-surface: #181B22;        /* Star-chart card surface */
  --bg-subtle: #212631;         /* Muted elevated surface */
  --bg-muted: #2C3342;          /* Border lines, inactive states */

  /* Ink & Typography */
  --ink-primary: #F4F1EA;       /* Warm parchment white */
  --ink-secondary: #B4ACA0;     /* Muted star-dust text */
  --ink-muted: #7A7265;         /* Tertiary labels */
  --ink-inverse: #0F1115;       /* Dark text on signal buttons */

  /* Signal Accent */
  --accent-signal: #FF5B2E;     /* Signal Orange stays vibrant */
  --accent-hover: #FF744D;      /* Lighter orange hover */
  --accent-subtle: #2A1712;     /* Deep terracotta tint */
  --accent-border: #632616;     /* Subtle warm rim */

  /* Structural Borders */
  --border-subtle: #262B37;     /* Minimal dark border */
  --border-strong: #3D4456;     /* Contrast borders */
  --border-dark: #F4F1EA;

  /* Semantic Feedback */
  --success-ink: #68D391;
  --success-bg: #11281A;
  --success-border: #22543D;
  --error-ink: #FC8181;
  --error-bg: #2B1515;
  --error-border: #631C1C;
  --warning-ink: #F6AD55;
  --warning-bg: #2B2111;
  --warning-border: #5F4217;

  --shadow-notebook: 0 2px 8px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.25);
}
```

---

## 3. Mathematical Formula Rendering (KaTeX Standard)

1. **Strict KaTeX Requirement**: Every mathematical expression, formula, equation, fraction, exponent, radical, and variable must render through KaTeX (`katex.renderToString` or `<KatexMath />` component).
2. **Forbidden**: Raw string approximations like `k*x`, `x^2`, `x^(5/2)`, `3x/4`, or plain text square roots `vx`.
3. In-line math uses `$ ... $` or `\( ... \)`.
4. Block equations / Systems of equations use display math `$$ ... $$` or `\[ ... \]`.

---

## 4. Linguistic & Localization Consistency

1. **100% English**: All UI labels, dates, charts, axis labels, tooltips, stats, badges, and feedback messages must be in English.
2. **No Mixed Russian/Uzbek**: Never pass `undefined` to `.toLocaleDateString()` (which defaults to user OS locale). Always specify `'en-US'` explicitly:
   ```ts
   // Required standard:
   date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
   ```
3. Time formatting must use standard 12-hour/24-hour English notation (`mm:ss` for timers, `h mm a` for timestamps).

---

## 5. Page States Architecture (Every Screen Requirement)

Every screen (`Dashboard`, `QuestionBank`, `MockTests`, `ClassroomLMS`, `TopicPracticeArena`, etc.) must implement three distinct foundational states:

1. **Loading Skeleton**:
   - Monochromatic, warm paper shimmer matching `--bg-subtle`.
   - Structural placeholder bars matching real content hierarchy. No generic spinning circular spinners centered on an empty white canvas.
2. **Empty State**:
   - Editorial illustration with the **Cosmo mascot** (clean SVG/canvas illustration on transparent background).
   - Clear, welcoming headline in `Fraunces`.
   - Explanatory copy in `Instrument Sans`.
   - Exactly **one prominent primary action** (Signal Orange button) directing the student forward.
3. **Error State**:
   - Clean, calm editorial error panel with error description and an actionable "Retry" button.
   - Never show generic system stack traces or blank screens.
4. **No Dev/Placeholder Artifacts**:
   - Words like `"Pending"`, `"Reserved for AI integration"`, `"Not Loaded"`, `"Calibrating telemetry for Academic Term"` are strictly forbidden. Replace placeholder pages with functional or cleanly communicated roadmaps with early opt-in or interactive previews.

---

## 6. Accessibility & Usability (WCAG AA)

1. **Contrast Ratio**:
   - Regular text: Minimum 4.5:1 against background.
   - Large text & headings: Minimum 3.0:1.
   - Signal Orange button text: Must use dark ink (`--ink-primary`) or pure white depending on luminance verification, ensuring high-contrast readability.
2. **Focus Rings**:
   - Visible, distinct focus outline on all interactive elements: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-signal)]`.
3. **Keyboard Navigation**:
   - Full keyboard operability (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`, arrow keys).
   - Keyboard shortcuts for exam screens (`A`, `B`, `C`, `D`, `M` for mark, `Left`/`Right` arrows).

---

## 7. Motion & Interaction Standards

1. **Timing**: 150ms to 220ms duration. Gentle ease-out curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
2. **Purposeful**: Micro-interactions provide feedback on hover, selection, and toggle without bouncy or distracting animations.
3. **Reduced Motion**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

---

## 8. Specific Known Bugs to Resolve During Redesign

| Bug | Root Cause | Mandated Fix |
| :--- | :--- | :--- |
| **Progress-to-Goal shows ~30% at Baseline** | Code calculated `(score / target) * 100` instead of relative gain from start score. | Calculate progress strictly as: `Math.max(0, Math.min(100, Math.round(((latestScore - startingScore) / (goalScore - startingScore)) * 100)))`. If baseline equals goal, show 100%. |
| **Chart Axis Dates in Russian** | `toLocaleDateString(undefined, ...)` invoked client OS locale. | Replace with `toLocaleDateString('en-US', { month: 'short', day: 'numeric' })`. |
| **Test Header shows "6 of 317" for 20Q Diagnostic** | Header used full topic question bank length (`questions.length`) instead of active diagnostic session size. | Header must display: `Question {currentIndex + 1} of {sessionTotalQuestions}` (e.g. 20 for diagnostic test). |
| **"Solved 4/248" vs "25% Accuracy" Confusion** | Progress bar represented coverage (solved/total), but was styled adjacent to accuracy percentage without distinction. | Clearly separate **Question Coverage** (e.g. "Coverage: 4/248 questions • 2%") from **Diagnostic Accuracy** (e.g. "Accuracy: 75% on attempted"). |
