import { HTMLAttributes } from 'react';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value?: number; // 0 to 100
  max?: number;
  segments?: number; // if specified, renders segmented variant for modules
  activeSegment?: number; // 1-based index of the currently active module segment
  completedSegments?: number; // number of fully completed segments
}

/**
 * Cosmo Notebook Progress Bar
 * - Thin 6px track, ink track at 8%, fill accent (Signal Orange)
 * - Continuous variant (value / max)
 * - Segmented variant for modules (e.g. Module 1, Module 2)
 */
export function ProgressBar({
  value = 0,
  max = 100,
  segments,
  activeSegment = 1,
  completedSegments = 0,
  className = '',
  ...props
}: ProgressBarProps) {
  // Segmented Variant (e.g. SAT 2-module or 4-module split)
  if (segments && segments > 1) {
    return (
      <div
        role="progressbar"
        aria-valuenow={completedSegments}
        aria-valuemin={0}
        aria-valuemax={segments}
        className={`flex items-center gap-1.5 w-full ${className}`}
        {...props}
      >
        {Array.from({ length: segments }).map((_, idx) => {
          const segIndex = idx + 1;
          const isCompleted = segIndex <= completedSegments;
          const isActive = segIndex === activeSegment && !isCompleted;

          return (
            <div
              key={idx}
              className="relative h-1.5 flex-1 rounded-full overflow-hidden"
              style={{ backgroundColor: 'var(--color-progress-track)' }}
            >
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent w-full'
                    : isActive
                    ? 'bg-accent/50 w-full animate-pulse'
                    : 'w-0'
                }`}
              />
            </div>
          );
        })}
      </div>
    );
  }

  // Continuous Variant
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={`h-1.5 w-full rounded-full overflow-hidden ${className}`}
      style={{ backgroundColor: 'var(--color-progress-track)', ...props.style }}
      {...props}
    >
      <div
        className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
