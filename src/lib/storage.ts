export function readStored<T>(kind: 'localStorage' | 'sessionStorage', key: string, valid: (value: unknown) => value is T): T | null {
  try {
    const raw = window[kind].getItem(key);
    const value: unknown = raw ? JSON.parse(raw) : null;
    return valid(value) ? value : null;
  } catch { return null; }
}

export function writeStored(kind: 'localStorage' | 'sessionStorage', key: string, value: unknown): boolean {
  try {
    if (value === null) window[kind].removeItem(key);
    else window[kind].setItem(key, JSON.stringify(value));
    return true;
  } catch { return false; }
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : isRecord(error) && typeof error.message === 'string'
    ? error.message : 'Something went wrong. Please try again.';
}
