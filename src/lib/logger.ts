/**
 * Minimal, Privacy-Safe Error Reporter
 *
 * - Disabled by default. Enabled ONLY when VITE_ERROR_LOGGING_ENABLED === 'true'.
 * - No tracking, no cookies, no personal identity or message content logged.
 * - Captures only unhandled stack traces, technical error names, and route paths.
 */

interface ErrorPayload {
  name: string;
  message: string;
  stack?: string;
  url: string;
  timestamp: string;
  componentStack?: string;
}

export function reportError(error: unknown, extraInfo?: { componentStack?: string }) {
  // Guard: Disabled by default unless explicitly turned on in environment
  const isEnabled = import.meta.env.VITE_ERROR_LOGGING_ENABLED === 'true';
  const endpoint = import.meta.env.VITE_ERROR_LOGGING_ENDPOINT;

  if (!isEnabled || !endpoint) {
    return;
  }

  try {
    let name = 'UnknownError';
    let message = 'An unknown error occurred';
    let stack: string | undefined;

    if (error instanceof Error) {
      name = error.name;
      message = error.message;
      stack = error.stack;
    } else if (typeof error === 'string') {
      message = error;
    }

    const payload: ErrorPayload = {
      name: String(name).slice(0, 100),
      message: String(message).slice(0, 500),
      stack: stack ? String(stack).slice(0, 2000) : undefined,
      url: typeof window !== 'undefined' ? window.location.pathname : '',
      timestamp: new Date().toISOString(),
      componentStack: extraInfo?.componentStack ? String(extraInfo.componentStack).slice(0, 1500) : undefined,
    };

    const serialized = JSON.stringify(payload);

    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([serialized], { type: 'application/json' });
      navigator.sendBeacon(endpoint, blob);
    } else {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: serialized,
        keepalive: true,
      }).catch(() => {
        // Fire-and-forget; never throw from logger
      });
    }
  } catch {
    // Fail silently without disrupting user experience
  }
}

/**
 * Initializes global uncaught error listeners on window.
 */
export function initGlobalErrorLogging() {
  if (typeof window === 'undefined') return;

  window.addEventListener('error', (event) => {
    reportError(event.error || event.message);
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportError(event.reason);
  });
}
