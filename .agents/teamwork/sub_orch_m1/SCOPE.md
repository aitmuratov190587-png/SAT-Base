# Scope: Milestone 1 — Mascot & CSS Motion Engine

## Architecture
- Define missing `@keyframes float` and motion utilities in `src/index.css`.
- Build vector SVG `<CosmoMascot />` with 6 interactive states (`idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`), responsive scaling (`xs` to `xl`), and accessibility (`prefers-reduced-motion`).
- Build `<CosmoLauncher />` floating dock component with animated Cosmo mascot.
- Strictly adhere to Cosmo Notebook design tokens (`check:tokens` pass with 0 forbidden classes).

## Code Layout Ownership
- `src/index.css`: Added `@keyframes float`, `.animate-float`, and mascot animation classes.
- `src/components/mascot/CosmoMascot.tsx`: Pure SVG mascot component.
- `src/components/mascot/CosmoLauncher.tsx`: Floating action button.

## Interface Contracts
```typescript
export type MascotState = 'idle' | 'hover' | 'thinking' | 'talking' | 'celebrating' | 'sleeping';

export interface CosmoMascotProps {
  state?: MascotState;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  showAura?: boolean;
}

export interface CosmoLauncherProps {
  state?: MascotState;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
  unreadCount?: number;
}
```

## Completion Criteria
1. `@keyframes float` defined in `src/index.css` so that existing 5 elements using `animate-float` and new mascot components animate smoothly.
2. `<CosmoMascot />` accurately renders all 6 states (`idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`) with responsive sizing and reduced motion support.
3. `<CosmoLauncher />` renders smoothly and handles click/hover/active states.
4. `npm run check:tokens` passes with 0 violations.
5. `npm run typecheck` passes with 0 errors.
