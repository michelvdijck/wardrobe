export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        stone: {
          50: '#FAFAF9',
          100: '#F5F4F1',
          200: '#EEECE8',
          300: '#DDD9D2',
          400: '#B9B4AB',
          500: '#8A8580',
          600: '#635F5A',
          700: '#4A4742',
          800: '#2E2C29',
          900: '#1A1916',
        },
        sand: '#C4A882',
      },
    },
  },
  plugins: [],
}
