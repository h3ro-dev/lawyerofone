/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6ECFB',
          100: '#C1CFF5',
          200: '#98AFEE',
          300: '#6E8FE7',
          400: '#4169E1',
          500: '#3356C8',
          600: '#2844AF',
          700: '#1E3396',
          800: '#15237D',
          900: '#0D1664',
        },
        accent: {
          50: '#E8EAED',
          100: '#C6CBD2',
          200: '#A1AAB7',
          300: '#7C899C',
          400: '#576881',
          500: '#34495E',
          600: '#2A3A4D',
          700: '#202C3C',
          800: '#171E2B',
          900: '#0E121A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 