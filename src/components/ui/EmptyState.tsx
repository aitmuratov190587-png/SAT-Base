import { ReactNode } from 'react';
import Button from './Button';

export interface EmptyStateProps {
  headline: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
  actionElement?: ReactNode;
  mascotSrc?: string;
  className?: string;
}

/**
 * Cosmo Notebook Empty State
 * - Friendly Cosmo mascot illustration (clean, floating, no distracting gradients)
 * - Headline in Fraunces serif
 * - Exactly one clear sentence in Instrument Sans
 * - Exactly ONE prominent call-to-action button
 */
export function EmptyState({
  headline,
  description,
  actionLabel,
  onAction,
  actionHref,
  actionElement,
  mascotSrc = '/images/avatar-blue.png',
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-[var(--radius-lg)] bg-surface border border-line ${className}`}
    >
      <div className="relative mb-5 flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full bg-accent/5 blur-xl pointer-events-none" />
        <img
          src={mascotSrc}
          alt="Cosmo Mascot"
          className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 object-contain animate-float select-none pointer-events-none"
        />
      </div>

      <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink max-w-md">
        {headline}
      </h3>

      <p className="mt-2 text-sm text-ink-2 font-sans max-w-md leading-relaxed">
        {description}
      </p>

      <div className="mt-6">
        {actionElement ? (
          actionElement
        ) : actionLabel && onAction ? (
          <Button variant="accent" size="md" onClick={onAction}>
            {actionLabel}
          </Button>
        ) : actionLabel && actionHref ? (
          <a
            href={actionHref}
            className="inline-flex items-center justify-center font-sans font-medium transition-all duration-150 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] active:translate-y-[1px] active:scale-[0.99] text-sm px-4 py-2 rounded-[var(--radius-sm)] bg-accent text-white hover:bg-accent-hover shadow-xs"
          >
            {actionLabel}
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default EmptyState;
