import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
})
