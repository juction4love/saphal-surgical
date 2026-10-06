/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        md: {
          primary: '#006A60',
          'on-primary': '#FFFFFF',
          'primary-container': '#74F8E5',
          'on-primary-container': '#00201C',
          secondary: '#4A635F',
          'on-secondary': '#FFFFFF',
          'secondary-container': '#CCE8E2',
          'on-secondary-container': '#05201C',
          surface: '#FAFDFB',
          'on-surface': '#191C1B',
          'surface-variant': '#DAE5E1',
          'on-surface-variant': '#3F4946',
          outline: '#6F7976',
          'outline-variant': '#BEC9C5',
          error: '#BA1A1A',
          'on-error': '#FFFFFF',
        }
      },
      borderRadius: {
        'm3-xs': '4px',
        'm3-sm': '8px',
        'm3-md': '12px',
        'm3-lg': '16px',
        'm3-xl': '28px',
        'm3-full': '9999px',
      },
      boxShadow: {
        'm3-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        'm3-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
      }
    },
  },
  plugins: [],
};
