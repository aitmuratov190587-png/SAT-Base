import { Sun, Moon } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export default function ThemeToggle({ showLabel = true, className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useApp();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`
        relative inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold
        transition-all duration-200 select-none bg-surface border border-line text-ink hover:border-line-strong shadow-xs
        ${className}
      `}
      title={isDark ? 'Switch to Paper Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-mustard transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-cobalt transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="hidden sm:inline-block">
          {isDark ? (
            <span className="text-mustard font-bold">Light</span>
          ) : (
            <span className="text-ink font-bold">Dark</span>
          )}
        </span>
      )}
    </button>
  );
}
