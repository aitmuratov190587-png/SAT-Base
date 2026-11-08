import React from 'react';
import { CosmoMascot, MascotState } from './CosmoMascot';
import { X } from 'lucide-react';

export interface CosmoLauncherProps {
  state?: MascotState;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
  unreadCount?: number;
}

export const CosmoLauncher: React.FC<CosmoLauncherProps> = ({
  state = 'idle',
  isOpen = false,
  onClick,
  className = '',
  unreadCount = 0,
}) => {
  const effectiveMascotState: MascotState = isOpen ? (state === 'idle' ? 'talking' : state) : state;
  const isSleeping = state === 'sleeping';

  const label = isSleeping
    ? 'Cosmo Assistant is resting during mock exam'
    : isOpen
    ? 'Close Cosmo Assistant'
    : 'Open Cosmo Assistant';

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Tooltip on Desktop Hover */}
      <div
        role="tooltip"
        id="cosmo-launcher-tooltip"
        className="pointer-events-none absolute right-full mr-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-sm)] bg-surface border border-line text-ink text-small font-sans shadow-notebook opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50"
      >
        <span className="font-medium text-ink">
          {isSleeping ? 'Exam Quiet Mode' : isOpen ? 'Close Cosmo' : 'Ask Cosmo'}
        </span>
        {!isSleeping && (
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-paper-2 border border-line text-ink-muted">
            Alt+C
          </kbd>
        )}
      </div>

      {/* Main Launcher Action Button */}
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-describedby="cosmo-launcher-tooltip"
        disabled={isSleeping}
        className={`group relative flex items-center justify-center p-2 rounded-full bg-surface border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          isSleeping
            ? 'opacity-70 cursor-not-allowed border-line'
            : 'border-line hover:border-line-strong hover:shadow-notebook-hover active:scale-95 shadow-notebook cursor-pointer'
        } ${isOpen ? 'ring-2 ring-accent/40 border-accent' : ''}`}
      >
        {/* Animated Cosmo Vector Mascot */}
        <CosmoMascot
          state={effectiveMascotState}
          size="md"
          interactive={false}
          showAura={!isSleeping && (isOpen || state === 'celebrating' || state === 'thinking')}
        />

        {/* Close State Indicator Badge */}
        {isOpen && (
          <span
            className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-paper-2 border border-line text-ink-2 shadow-xs transition-transform duration-200 hover:scale-110"
            aria-hidden="true"
          >
            <X className="w-3 h-3 text-ink" />
          </span>
        )}

        {/* Unread Message Badge */}
        {!isOpen && unreadCount > 0 && (
          <span
            className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-accent text-paper font-mono font-bold text-[11px] border-2 border-surface shadow-xs animate-pulse"
            aria-label={`${unreadCount} unread message${unreadCount > 1 ? 's' : ''}`}
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CosmoLauncher;
