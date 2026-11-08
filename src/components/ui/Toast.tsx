import { ReactNode } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

export type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface ToastProps {
  variant?: ToastVariant;
  title: ReactNode;
  description?: ReactNode;
  onDismiss?: () => void;
  className?: string;
}

/**
 * Cosmo Notebook Toast
 * - Editorial alert notification with warm paper surface and semantic indicators
 */
export function Toast({
  variant = 'info',
  title,
  description,
  onDismiss,
  className = '',
}: ToastProps) {
  const variantConfig = {
    info: {
      border: 'border-cobalt/30',
      icon: <Info className="w-4 h-4 text-cobalt" />,
      accentBar: 'bg-cobalt',
    },
    success: {
      border: 'border-moss/30',
      icon: <CheckCircle2 className="w-4 h-4 text-moss" />,
      accentBar: 'bg-moss',
    },
    warning: {
      border: 'border-mustard/40',
      icon: <AlertTriangle className="w-4 h-4 text-mustard" />,
      accentBar: 'bg-mustard',
    },
    error: {
      border: 'border-berry/30',
      icon: <AlertCircle className="w-4 h-4 text-berry" />,
      accentBar: 'bg-berry',
    },
  };

  const config = variantConfig[variant];

  return (
    <div
      role="status"
      className={`
        relative flex items-start gap-3 p-4 rounded-[var(--radius-md)] bg-surface text-ink border ${config.border}
        shadow-notebook overflow-hidden max-w-md w-full font-sans animate-fade-in ${className}
      `}
    >
      <div className={`absolute top-0 bottom-0 left-0 w-1 ${config.accentBar}`} />
      <span className="shrink-0 mt-0.5 ml-1">{config.icon}</span>

      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-semibold text-ink leading-tight">{title}</p>
        {description && (
          <p className="mt-1 text-xs text-ink-2 leading-relaxed">{description}</p>
        )}
      </div>

      {onDismiss && (
        <button
          onClick={onDismiss}
          type="button"
          aria-label="Dismiss toast"
          className="shrink-0 p-1 rounded text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

export default Toast;
