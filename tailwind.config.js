/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: '30rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
        '2xl': '90rem',
      },
      maxWidth: {
        base: '90rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1D1D1D',
          blue: '#0060FE',
          gray: {
            100: '#F7F7FA',
            200: '#F6F7FC',
            300: '#E6E8ED',
          },
        },
      },
      fontSize: {
        32: '2rem',
        40: '2.5rem',
      },
      lineHeight: {
        18: '1.125rem',
      },
    },
  },
  plugins: [],
};
