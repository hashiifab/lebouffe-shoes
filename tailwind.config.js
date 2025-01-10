/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#FDF8F3',
          100: '#FAE8D4',
          200: '#F5D0A9',
          500: '#D4924B',
          600: '#B67A3D',
          700: '#995E2B',
          800: '#7A4A22',
          900: '#5C3718',
        },
      },
    },
  },
  plugins: [],
};