import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        m3: {
          primary: '#006876', // M3 Deep Medical Teal
          'primary-hover': '#00535e',
          'on-primary': '#ffffff',
          'primary-container': '#a1efff',
          'on-primary-container': '#001f24',

          navy: '#0b192c', // Deep Navy Brand Surface/Accent
          'navy-container': '#162b46',
          'on-navy': '#ffffff',

          secondary: '#4a6267',
          'on-secondary': '#ffffff',
          'secondary-container': '#cde7ec',
          'on-secondary-container': '#051f23',

          tertiary: '#0e7490',
          'tertiary-container': '#cff8ff',
          'on-tertiary-container': '#001f25',

          surface: '#f8fafc',
          'surface-dim': '#dadce0',
          'surface-container-lowest': '#ffffff',
          'surface-container-low': '#f1f5f9',
          'surface-container': '#e2e8f0',
          'surface-container-high': '#cbd5e1',
          'surface-container-highest': '#94a3b8',
          'on-surface': '#0f172a',
          'on-surface-variant': '#475569',

          outline: '#64748b',
          'outline-variant': '#cbd5e1',

          emerald: '#059669',
          'emerald-container': '#d1fae5',
          'on-emerald-container': '#064e3b',
        },
      },
      boxShadow: {
        'm3-1': '0 1px 3px 1px rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'm3-2': '0 2px 6px 2px rgba(0, 0, 0, 0.10), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'm3-3': '0 4px 12px 3px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.08)',
        'm3-4': '0 6px 16px 4px rgba(0, 0, 0, 0.14), 0 2px 4px 0 rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans Devanagari',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        heading: [
          'Plus Jakarta Sans',
          'Noto Sans Devanagari',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
