/**
 * Resolves the public canonical site URL dynamically for OAuth & Email redirects.
 * Prioritizes window.location.origin in the browser, falling back to optional
 * VITE_PUBLIC_SITE_URL or the production domain placeholder.
 */
export function getPublicSiteUrl(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  const envUrl = import.meta.env.VITE_PUBLIC_SITE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/+$/, '');
  }
  return 'https://PROD_DOMAIN';
}
