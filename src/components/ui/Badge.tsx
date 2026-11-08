import { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'moss'
  | 'mustard'
  | 'berry'
  | 'accent'
  | 'neutral'
  | 'cobalt';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
  children: ReactNode;
}

/**
 * Cosmo Notebook Badge
 * - Pill with 1px border, sentence case, 12px font size.
 * - Difficulty colors:
 *   - Easy: moss green
 *   - Medium: mustard yellow
 *   - Hard: berry red
 *   - Accent: Signal orange
 *   - Cobalt: editorial blue
 *   - Neutral: graphite ink
 */
export function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
    easy: {
      container: 'bg-moss/15 text-moss border border-moss/40 font-medium',
      dot: 'bg-moss',
    },
    moss: {
      container: 'bg-moss/15 text-moss border border-moss/40 font-medium',
      dot: 'bg-moss',
    },
    medium: {
      container: 'bg-mustard/20 text-mustard border border-mustard/50 font-medium',
      dot: 'bg-mustard',
    },
    mustard: {
      container: 'bg-mustard/20 text-mustard border border-mustard/50 font-medium',
      dot: 'bg-mustard',
    },
    hard: {
      container: 'bg-berry/15 text-berry border border-berry/40 font-medium',
      dot: 'bg-berry',
    },
    berry: {
      container: 'bg-berry/15 text-berry border border-berry/40 font-medium',
      dot: 'bg-berry',
    },
    accent: {
      container: 'bg-accent/15 text-accent border border-accent/40 font-medium',
      dot: 'bg-accent',
    },
    cobalt: {
      container: 'bg-cobalt/15 text-cobalt border border-cobalt/40 font-medium',
      dot: 'bg-cobalt',
    },
    neutral: {
      container: 'bg-paper-2 text-ink-2 border border-line font-medium',
      dot: 'bg-ink-muted',
    },
  };

  const style = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-sans font-medium select-none ${style.container} ${className}`}
      {...props}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${style.dot}`} aria-hidden="true" />}
      {children}
    </span>
  );
}

export default Badge;
