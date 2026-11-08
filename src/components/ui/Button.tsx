import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

/**
 * Cosmo Notebook Button
 * - primary: ink background, paper text, subtle accent underline on hover
 * - accent: Signal Orange background, white text, dark orange hover
 * - secondary: surface background, line border, ink text
 * - ghost: transparent background, ink text, paper-2 hover
 * - icon: compact square button for icons
 * Subtle 1px offset "press" effect (active:translate-y-[1px]), no heavy shadows.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    children,
    disabled,
    ...props
  },
  ref
) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans font-medium transition-all duration-150 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] active:translate-y-[1px] active:scale-[0.99] disabled:cursor-not-allowed disabled:pointer-events-none disabled:active:translate-y-0 disabled:active:scale-100';

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-3 py-1.5 rounded-[var(--radius-sm)] gap-1.5',
    md: 'text-sm px-4 py-2 rounded-[var(--radius-sm)] gap-2',
    lg: 'text-base px-5 py-2.5 rounded-[var(--radius-md)] gap-2.5',
  };

  const iconSizeStyles: Record<ButtonSize, string> = {
    sm: 'p-1.5 rounded-[var(--radius-sm)]',
    md: 'p-2 rounded-[var(--radius-sm)]',
    lg: 'p-2.5 rounded-[var(--radius-md)]',
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-ink text-paper group hover:decoration-accent hover:underline hover:decoration-2 hover:underline-offset-4 shadow-xs disabled:bg-ink disabled:text-paper/40 disabled:hover:no-underline',
    accent:
      'bg-accent !text-white hover:bg-accent-hover shadow-xs disabled:bg-accent disabled:!text-white/40',
    secondary:
      'bg-surface text-ink border border-line hover:border-line-strong hover:bg-paper-2 shadow-xs disabled:bg-surface disabled:border-line disabled:text-ink/40',
    ghost:
      'bg-transparent text-ink hover:bg-paper-2 hover:text-ink disabled:bg-transparent disabled:text-ink/40',
    icon:
      'bg-surface text-ink border border-line hover:border-line-strong hover:bg-paper-2 disabled:bg-surface disabled:border-line disabled:text-ink/40',
  };

  const appliedSizeStyle = variant === 'icon' ? iconSizeStyles[size] : sizeStyles[size];

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${appliedSizeStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
});

export default Button;
