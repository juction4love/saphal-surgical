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
        brand: {
          bg: '#FFFFFF',
          alt: '#F0FDF4',
          primary: '#15803D',
          'primary-hover': '#166534',
          'primary-light': '#DCFCE7',
          'primary-pale': '#F0FDF4',
          text: '#17251C',
          muted: '#475569',
          border: '#DCFCE7',
          borderSubtle: '#E2E8F0',
        },
        m3: {
          primary: '#15803D',
          'primary-hover': '#166534',
          'on-primary': '#ffffff',
          'primary-container': '#DCFCE7',
          'on-primary-container': '#14532D',

          surface: '#FFFFFF',
          'surface-variant': '#F0FDF4',
          'on-surface': '#17251C',
          'on-surface-variant': '#475569',

          outline: '#86EFAC',
          'outline-variant': '#DCFCE7',
        },
      },
      boxShadow: {
        'm3-1': '0 1px 3px 0 rgba(21, 128, 61, 0.08), 0 1px 2px -1px rgba(21, 128, 61, 0.08)',
        'm3-2': '0 4px 6px -1px rgba(21, 128, 61, 0.1), 0 2px 4px -2px rgba(21, 128, 61, 0.06)',
        'm3-3': '0 10px 15px -3px rgba(21, 128, 61, 0.1), 0 4px 6px -4px rgba(21, 128, 61, 0.05)',
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
