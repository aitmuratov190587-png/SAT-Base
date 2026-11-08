import React from 'react';
import { MascotState } from './CosmoMascot';
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
        data-mascot-state={effectiveMascotState}
        className={`group relative flex items-center justify-center p-1 bg-transparent border-0 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl ${
          isSleeping
            ? 'opacity-60 cursor-not-allowed grayscale'
            : 'hover:scale-110 active:scale-95 cursor-pointer drop-shadow-md hover:drop-shadow-lg'
        }`}
      >
        {/* Original Cosmo Mascot Image */}
        <div
          data-mascot-state={effectiveMascotState}
          className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center"
        >
          <img
            src="/images/avatar-blue.png"
            alt="Cosmo"
            width="64"
            height="64"
            className={`w-full h-full object-contain pointer-events-none select-none transition-transform duration-200 ${
              !isSleeping && (effectiveMascotState === 'talking' || effectiveMascotState === 'celebrating')
                ? 'animate-bounce'
                : ''
            }`}
          />
        </div>

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
