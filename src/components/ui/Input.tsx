import {
  InputHTMLAttributes,
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react';
import { Search } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Cosmo Notebook Input
 * - Surface background, 1px line border, ink text, accent focus ring
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, helperText, error, leftIcon, rightIcon, className = '', id, disabled, ...props },
  ref
) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full font-sans">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-medium text-ink mb-1.5 select-none"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-ink-muted pointer-events-none flex items-center">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-ink)', ...props.style }}
          className={`
            w-full rounded-[var(--radius-sm)] bg-surface text-ink placeholder:text-ink-muted text-sm font-sans
            border px-3.5 py-2 transition-colors duration-150
            focus-visible:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            disabled:!bg-paper-2 disabled:!text-ink-muted disabled:cursor-not-allowed
            ${leftIcon ? 'pl-9' : ''}
            ${rightIcon ? 'pr-9' : ''}
            ${error ? 'border-berry focus:border-berry focus:ring-berry' : 'border-line hover:border-line-strong'}
            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 text-ink-muted pointer-events-none flex items-center">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className="mt-1 text-xs text-berry font-sans">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-xs text-ink-2 font-sans">{helperText}</p>
      ) : null}
    </div>
  );
});

export interface SearchInputProps extends Omit<InputProps, 'leftIcon' | 'rightIcon'> {
  showSlashShortcut?: boolean;
}

/**
 * Specialized Search Input with standard "/" shortcut hint
 * Automatically focuses when user presses "/" anywhere on page (if not inside another input/textarea)
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    { showSlashShortcut = true, placeholder = 'Search topics, formulas, skills...', className = '', ...props },
    ref
  ) {
    const internalRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    useEffect(() => {
      if (!showSlashShortcut) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          e.key === '/' &&
          document.activeElement?.tagName !== 'INPUT' &&
          document.activeElement?.tagName !== 'TEXTAREA'
        ) {
          e.preventDefault();
          internalRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showSlashShortcut]);

    return (
      <Input
        ref={internalRef}
        placeholder={placeholder}
        leftIcon={<Search className="w-4 h-4 text-ink-muted" />}
        rightIcon={
          showSlashShortcut ? (
            <kbd
              title="Press / to search"
              className="px-1.5 py-0.5 rounded border border-line bg-paper-2 text-[10px] font-mono text-ink-muted shadow-2xs select-none"
            >
              /
            </kbd>
          ) : undefined
        }
        className={className}
        {...props}
      />
    );
  }
);

export default Input;
