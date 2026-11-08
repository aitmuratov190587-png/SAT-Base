import { ReactNode, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  headerContent?: ReactNode;
  showCloseButton?: boolean;
}

/**
 * Cosmo Notebook Modal
 * - Clean editorial overlay with paper surface dialog
 * - Fraunces heading, accessible escape listener and click-outside dismissal
 * - Capped at max-height calc(100dvh - 32px) with fixed header/footer and scrollable body
 */
export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = 'md',
  className = '',
  headerContent,
  showCloseButton = true,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-[1px] animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={dialogRef}
        className={`w-full ${maxWidthStyles[maxWidth]} rounded-[var(--radius-lg)] bg-surface text-ink border border-line shadow-notebook overflow-hidden flex flex-col max-h-[calc(100dvh-32px)] ${className}`}
      >
        {/* Header */}
        {(title || description || headerContent) && (
          <div className="flex items-start justify-between p-5 sm:p-6 pb-4 border-b border-line/60 shrink-0">
            {headerContent ? (
              <div className="flex-1 min-w-0">{headerContent}</div>
            ) : (
              <div>
                {title && (
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="mt-1 text-xs text-ink-2 font-sans">{description}</p>
                )}
              </div>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                type="button"
                aria-label="Close dialog"
                className="p-1.5 rounded-[var(--radius-sm)] text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer shrink-0 ml-3"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">{children}</div>

        {/* Footer Actions */}
        {footer && (
          <div className="p-4 sm:p-6 pt-3 border-t border-line/60 bg-paper-2/40 flex items-center justify-end gap-2.5 shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
