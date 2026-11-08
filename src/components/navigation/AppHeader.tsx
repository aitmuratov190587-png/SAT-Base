import { useRef, useEffect } from 'react';
import { Search, Flame, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import ThemeToggle from '../ThemeToggle';

export interface AppHeaderProps {
  onOpenAITutor?: () => void;
}

/**
 * Cosmo Notebook Top Bar Navigation
 * - Global search with press "/" to focus
 * - Day streak chip in mustard
 * - Theme toggle
 * - Clean 1px bottom border in var(--color-line), no heavy borders or shadows
 */
export default function AppHeader({ onOpenAITutor }: AppHeaderProps) {
  const { profile } = useApp();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const streak = profile?.streak ?? 0;

  // Global "/" keyboard shortcut to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-30 h-14 bg-surface/90 backdrop-blur-md border-b border-line px-4 sm:px-6 flex items-center justify-between font-sans text-ink transition-colors duration-200">
      {/* Left: Mobile Brand & Global Search */}
      <div className="flex items-center gap-3">
        {/* Mobile-only logo */}
        <Link to="/" className="flex items-center gap-2 md:hidden group">
          <img
            src="/images/avatar-blue.png"
            alt="SATBase"
            className="w-7 h-7 object-contain select-none pointer-events-none"
          />
          <span className="font-display font-bold text-base tracking-tight text-ink">
            SAT<span className="text-accent" style={{ color: 'var(--color-accent)' }}>BASE</span>
          </span>
        </Link>

        {/* Global Search Bar */}
        <div className="relative items-center hidden sm:flex">
          <Search className="w-3.5 h-3.5 text-ink-muted absolute left-3 pointer-events-none" strokeWidth={1.5} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search topics, formulas, reading skills..."
            className="w-64 md:w-80 pl-8 pr-8 py-1.5 text-xs bg-paper-2 border border-line rounded-[var(--radius-sm)] text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent focus:bg-surface transition-colors duration-150"
          />
          <kbd
            title="Press / to search"
            className="absolute right-2.5 px-1.5 py-0.5 rounded border border-line bg-surface text-[10px] font-mono text-ink-muted select-none shadow-2xs pointer-events-none"
          >
            /
          </kbd>
        </div>
      </div>

      {/* Right: AI Tutor trigger, Streak Chip, Theme Toggle */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile AI Tutor Trigger Button */}
        {onOpenAITutor && (
          <button
            onClick={() => onOpenAITutor()}
            title="Open Socratic AI Tutor"
            className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] bg-surface border border-line text-ink hover:border-accent hover:text-accent transition-colors text-xs font-medium shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
            <span className="text-[11px]">AI Tutor</span>
          </button>
        )}

        {/* Streak Chip in Mustard */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mustard/15 border border-mustard/40 text-mustard font-mono text-xs font-semibold select-none shadow-2xs">
          <Flame className="w-3.5 h-3.5 text-mustard shrink-0" strokeWidth={1.5} />
          <span>{streak}d</span>
          <span className="text-[10px] opacity-75 hidden xs:inline font-normal">STREAK</span>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
