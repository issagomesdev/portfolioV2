import type { Config } from 'tailwindcss';
import { ABOUT_LAYOUT } from './src/lib/aboutLayout';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* All colors use RGB CSS variables so opacity modifiers (bg-primary/10) work correctly.
           Variables are defined in src/styles/theme.css for both dark and light modes. */
        background:                  'rgb(var(--c-background) / <alpha-value>)',
        surface:                     'rgb(var(--c-surface) / <alpha-value>)',
        'surface-dim':               'rgb(var(--c-surface-dim) / <alpha-value>)',
        'surface-bright':            'rgb(var(--c-surface-bright) / <alpha-value>)',
        'surface-variant':           'rgb(var(--c-surface-variant) / <alpha-value>)',
        'surface-container-lowest':  'rgb(var(--c-surface-container-lowest) / <alpha-value>)',
        'surface-container-low':     'rgb(var(--c-surface-container-low) / <alpha-value>)',
        'surface-container':         'rgb(var(--c-surface-container) / <alpha-value>)',
        'surface-container-high':    'rgb(var(--c-surface-container-high) / <alpha-value>)',
        'surface-container-highest': 'rgb(var(--c-surface-container-highest) / <alpha-value>)',
        'surface-tint':              'rgb(var(--c-surface-tint) / <alpha-value>)',
        'on-background':             'rgb(var(--c-on-background) / <alpha-value>)',
        'on-surface':                'rgb(var(--c-on-surface) / <alpha-value>)',
        'on-surface-variant':        'rgb(var(--c-on-surface-variant) / <alpha-value>)',
        'inverse-surface':           'rgb(var(--c-inverse-surface) / <alpha-value>)',
        'inverse-on-surface':        'rgb(var(--c-inverse-on-surface) / <alpha-value>)',
        primary:                     'rgb(var(--c-primary) / <alpha-value>)',
        'on-primary':                'rgb(var(--c-on-primary) / <alpha-value>)',
        'primary-container':         'rgb(var(--c-primary-container) / <alpha-value>)',
        'on-primary-container':      'rgb(var(--c-on-primary-container) / <alpha-value>)',
        'primary-fixed':             'rgb(var(--c-primary-fixed) / <alpha-value>)',
        'primary-fixed-dim':         'rgb(var(--c-primary-fixed-dim) / <alpha-value>)',
        'on-primary-fixed':          'rgb(var(--c-on-primary-fixed) / <alpha-value>)',
        'on-primary-fixed-variant':  'rgb(var(--c-on-primary-fixed-variant) / <alpha-value>)',
        'inverse-primary':           'rgb(var(--c-inverse-primary) / <alpha-value>)',
        secondary:                   'rgb(var(--c-secondary) / <alpha-value>)',
        'on-secondary':              'rgb(var(--c-on-secondary) / <alpha-value>)',
        'secondary-container':       'rgb(var(--c-secondary-container) / <alpha-value>)',
        'on-secondary-container':    'rgb(var(--c-on-secondary-container) / <alpha-value>)',
        'secondary-fixed':           'rgb(var(--c-secondary-fixed) / <alpha-value>)',
        'secondary-fixed-dim':       'rgb(var(--c-secondary-fixed-dim) / <alpha-value>)',
        'on-secondary-fixed':        'rgb(var(--c-on-secondary-fixed) / <alpha-value>)',
        'on-secondary-fixed-variant':'rgb(var(--c-on-secondary-fixed-variant) / <alpha-value>)',
        tertiary:                    'rgb(var(--c-tertiary) / <alpha-value>)',
        'on-tertiary':               'rgb(var(--c-on-tertiary) / <alpha-value>)',
        'tertiary-container':        'rgb(var(--c-tertiary-container) / <alpha-value>)',
        'on-tertiary-container':     'rgb(var(--c-on-tertiary-container) / <alpha-value>)',
        'tertiary-fixed':            'rgb(var(--c-tertiary-fixed) / <alpha-value>)',
        'tertiary-fixed-dim':        'rgb(var(--c-tertiary-fixed-dim) / <alpha-value>)',
        'on-tertiary-fixed':         'rgb(var(--c-on-tertiary-fixed) / <alpha-value>)',
        'on-tertiary-fixed-variant': 'rgb(var(--c-on-tertiary-fixed-variant) / <alpha-value>)',
        error:                       'rgb(var(--c-error) / <alpha-value>)',
        'on-error':                  'rgb(var(--c-on-error) / <alpha-value>)',
        'error-container':           'rgb(var(--c-error-container) / <alpha-value>)',
        'on-error-container':        'rgb(var(--c-on-error-container) / <alpha-value>)',
        outline:                     'rgb(var(--c-outline) / <alpha-value>)',
        'outline-variant':           'rgb(var(--c-outline-variant) / <alpha-value>)',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
        brand: ['Sansation', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      screens: {
        /* About section breakpoints — driven by src/lib/aboutLayout.ts.
           Use these variants (about-tablet:, about-desktop:) in JSX when
           you need Tailwind responsive classes tied to the about layout. */
        'about-tablet':  `${ABOUT_LAYOUT.tabletMin}px`,
        'about-desktop': `${ABOUT_LAYOUT.desktopMin}px`,
      },
    },
  },
  plugins: [],
} satisfies Config;
