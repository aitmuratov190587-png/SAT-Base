import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function excludeCollegeBoardPlugin(enabled: boolean) {
  if (enabled) return null;
  return {
    name: 'exclude-collegeboard-questions',
    enforce: 'pre' as const,
    transform(code: string, id: string) {
      const normalized = id.replace(/\\/g, '/');
      if (
        normalized.includes('crossTextQuestions.ts') ||
        (normalized.includes('src/data/math') &&
          !normalized.includes('types.ts') &&
          !normalized.includes('index.ts') &&
          !normalized.includes('advancedMath.ts'))
      ) {
        return {
          code: code.replace(
            /export const (\w+)(?::\s*(?:MathQuestion|CrossTextQuestion)\[\])?\s*=\s*\[[\s\S]*?\];/g,
            'export const $1 = [];'
          ),
          map: null,
        };
      }
      return null;
    },
  };
}

export default defineConfig(({ mode }) => {
  const includeCollegeBoard =
    process.env.VITE_INCLUDE_COLLEGEBOARD_QUESTIONS !== undefined
      ? process.env.VITE_INCLUDE_COLLEGEBOARD_QUESTIONS === 'true'
      : mode === 'development';

  const includedQuestionCount = includeCollegeBoard ? 2707 : 25;

  return {
    define: {
      'import.meta.env.VITE_INCLUDE_COLLEGEBOARD_QUESTIONS': JSON.stringify(
        includeCollegeBoard ? 'true' : 'false'
      ),
      'import.meta.env.VITE_INCLUDED_QUESTION_COUNT': JSON.stringify(
        includedQuestionCount
      ),
    },
    plugins: [
      react(),
      excludeCollegeBoardPlugin(includeCollegeBoard),
    ].filter(Boolean),
    server: {
      host: true,
      port: 5173,
      open: true,
      watch: {
        ignored: [
          '**/scratch/**',
          '**/satbaselogo*/**',
          '**/*.zip',
          '**/node_modules/**',
          '**/.git/**',
        ],
      },
    },
    preview: {
      port: 4173,
      headers: {
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://apis.google.com https://www.desmos.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://www.desmos.com; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:; img-src 'self' data: https: blob:; connect-src 'self' https://qkobxopqcmyoqxrklpvg.supabase.co wss://qkobxopqcmyoqxrklpvg.supabase.co https://accounts.google.com; frame-src 'self' https://www.desmos.com https://accounts.google.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';",
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  };
});
