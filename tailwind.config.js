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
      spacing: {
        177: '11.0625rem',
        200: '12.5rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1D1D1D',
          blue: '#0060FE',
          pink: '#FFE6EB',
          red: '#FE0032',
          gray: {
            100: '#F7F7FA',
            200: '#F6F7FC',
            300: '#E6E8ED',
            400: '#F5F7FD',
            500: '#F7F7FB',
            600: '#DEE0E5',
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
      borderRadius: {
        32: '2rem',
      },
      backgroundImage: {
        'base-gradient': 'linear-gradient(180deg, #F7F7FA 0%, #F4F7FD 100%);',
        'pink-gradient':
          'linear-gradient(180deg, #FFE6EB 0%, #FFDBE2 100%);        ',
        'blue-gradient':
          'linear-gradient(0deg, #0060FE, #0060FE), linear-gradient(180deg, #0060FE 0%, rgba(0, 96, 254, 0.8) 100%), linear-gradient(180deg, #0060FE 0%, #317FFE 100%);',
        brands: "url('../assets/images/bg-brands.png')",
      },
    },
  },
  plugins: [],
};
