/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Cosmo Notebook Primary Tokens
        paper: 'rgb(var(--color-paper-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        'paper-2': 'rgb(var(--color-paper-2-rgb) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--color-ink-rgb) / <alpha-value>)',
          2: 'rgb(var(--color-ink-2-rgb) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted-rgb) / <alpha-value>)',
        },
        line: {
          DEFAULT: 'rgb(var(--color-line-rgb) / <alpha-value>)',
          strong: 'rgb(var(--color-line-strong-rgb) / <alpha-value>)',
        },
        // ONE Signal Accent (Signal Orange)
        accent: {
          DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
        // Editorial Palette
        cobalt: 'rgb(var(--color-cobalt-rgb) / <alpha-value>)',
        moss: 'rgb(var(--color-moss-rgb) / <alpha-value>)',
        mustard: 'rgb(var(--color-mustard-rgb) / <alpha-value>)',
        berry: 'rgb(var(--color-berry-rgb) / <alpha-value>)',

        // Temporary backward compatibility mappings for unmigrated components
        'surface-light': 'var(--color-paper)',
        academic: {
          navy: 'var(--color-ink)',
          blue: 'var(--color-cobalt)',
          slate: 'var(--color-ink-2)',
          muted: 'var(--color-ink-muted)',
        },
        serene: {
          sage: 'var(--color-moss)',
          amber: 'var(--color-mustard)',
          coral: 'var(--color-berry)',
        },
        neon: {
          cyan: 'var(--color-accent)',
          teal: 'var(--color-moss)',
          purple: 'var(--color-cobalt)',
          crimson: 'var(--color-berry)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        serif: ['Fraunces', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em' }],
        'h1': ['40px', { lineHeight: '48px', letterSpacing: '-0.015em' }],
        'h2': ['28px', { lineHeight: '34px', letterSpacing: '-0.01em' }],
        'h3': ['20px', { lineHeight: '26px', letterSpacing: '-0.005em' }],
        'body': ['16px', { lineHeight: '26px' }],
        'small': ['14px', { lineHeight: '20px' }],
        'mono-num': ['14px', { lineHeight: '20px' }],
      },
      borderRadius: {
        'sm': 'var(--radius-sm)', // 10px
        'md': 'var(--radius-md)', // 14px
        'lg': 'var(--radius-lg)', // 22px
      },
      spacing: {
        // Standard 4 / 8 / 12 / 16 / 24 / 32 / 48 / 72 / 112 px scale
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '18': '72px',
        '28': '112px',
      },
      boxShadow: {
        'notebook': 'var(--shadow-notebook)',
        'notebook-hover': 'var(--shadow-notebook-hover)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
