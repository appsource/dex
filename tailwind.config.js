/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand-color, #2172E5)',
          50: 'color-mix(in srgb, var(--brand-color, #2172E5) 10%, white)',
          500: 'var(--brand-color, #2172E5)',
        },
      },
    },
  },
  plugins: [],
}
