import { ReactNode } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export interface StatProps {
  value: string | number;
  label: string;
  delta?: string | number;
  deltaType?: 'positive' | 'negative' | 'neutral';
  deltaLabel?: string;
  icon?: ReactNode;
  kicker?: string;
  className?: string;
}

/**
 * Cosmo Notebook Stat Component
 * - Big JetBrains Mono number
 * - Small editorial label below
 * - Optional telemetry delta (+40 pts)
 */
export function Stat({
  value,
  label,
  delta,
  deltaType = 'positive',
  deltaLabel,
  icon,
  kicker,
  className = '',
}: StatProps) {
  const deltaColors = {
    positive: 'text-moss bg-moss/10 border-moss/30',
    negative: 'text-berry bg-berry/10 border-berry/30',
    neutral: 'text-ink-2 bg-paper-2 border-line',
  };

  return (
    <div
      className={`p-5 rounded-[var(--radius-md)] bg-surface border border-line text-ink flex flex-col justify-between ${className}`}
    >
      {(kicker || icon) && (
        <div className="flex items-center justify-between mb-3 text-xs">
          {kicker && (
            <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted">
              {kicker}
            </span>
          )}
          {icon && <span className="text-ink-muted">{icon}</span>}
        </div>
      )}

      <div>
        <div className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          {value}
        </div>
        <div className="mt-1 text-xs text-ink-2 font-sans">{label}</div>
      </div>

      {delta !== undefined && (
        <div className="mt-4 pt-3 border-t border-line/60 flex items-center gap-1.5 text-xs font-mono">
          <span
            className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border text-[11px] font-semibold ${deltaColors[deltaType]}`}
          >
            {deltaType === 'positive' ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : deltaType === 'negative' ? (
              <ArrowDownRight className="w-3 h-3" />
            ) : null}
            <span>{delta}</span>
          </span>
          {deltaLabel && <span className="text-ink-muted text-[11px] font-sans">{deltaLabel}</span>}
        </div>
      )}
    </div>
  );
}

export default Stat;
