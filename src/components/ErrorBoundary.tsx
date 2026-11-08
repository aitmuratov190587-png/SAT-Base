import { Component, ErrorInfo, ReactNode } from 'react';
import Button from './ui/Button';
import { reportError } from '../lib/logger';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    reportError(error, { componentStack: errorInfo.componentStack || undefined });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-paper flex items-center justify-center p-4 select-none font-sans">
          <div className="max-w-md w-full bg-surface border border-line rounded-[var(--radius-lg)] p-8 sm:p-10 text-center shadow-notebook">
            <div className="relative mb-5 flex items-center justify-center">
              <div className="absolute w-28 h-28 rounded-full bg-accent/5 blur-xl pointer-events-none" />
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo Mascot"
                className="relative z-10 w-24 h-24 object-contain animate-float pointer-events-none"
              />
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              Something went sideways
            </h1>

            <p className="mt-2 text-sm text-ink-2 leading-relaxed">
              Cosmo stumbled into an unexpected calculation. Don't worry, your progress is safe.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="accent" size="md" onClick={this.handleReload} className="w-full sm:w-auto">
                Reload page
              </Button>
              <Button variant="secondary" size="md" onClick={this.handleGoHome} className="w-full sm:w-auto">
                Back to dashboard
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
