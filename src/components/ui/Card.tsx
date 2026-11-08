import { HTMLAttributes, forwardRef, ReactNode } from 'react';

export type CardVariant = 'plain' | 'ruled' | 'stamped';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  children?: ReactNode;
}

/**
 * Cosmo Notebook Card
 * - surface background, 1px --color-line border, NO drop shadow
 * - hover raises border color to ink at 20%
 * Variants:
 * - plain: standard clean paper surface
 * - ruled: faint horizontal notebook lines inside
 * - stamped: dashed border
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = 'plain', interactive = false, className = '', children, ...props },
  ref
) {
  const baseStyles =
    'relative rounded-[var(--radius-md)] bg-surface text-ink transition-colors duration-150';

  const variantStyles: Record<CardVariant, string> = {
    plain: 'border border-line',
    ruled:
      'border border-line [background-image:repeating-linear-gradient(0deg,transparent,transparent_27px,var(--color-line)_28px)] bg-local',
    stamped: 'border-2 border-dashed border-line-strong',
  };

  const interactiveStyles = interactive
    ? 'hover:border-ink/20 cursor-pointer'
    : 'hover:border-ink/20';

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export function CardHeader({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-5 sm:p-6 pb-3 border-b border-line/60 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`font-display text-lg sm:text-xl font-semibold tracking-tight text-ink ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`mt-1 text-xs sm:text-sm text-ink-2 font-sans ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-5 sm:p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-4 sm:p-6 pt-3 border-t border-line/60 flex items-center justify-between text-xs text-ink-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
