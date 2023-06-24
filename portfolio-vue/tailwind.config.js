/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/App.vue',
    './src/views/HomeView.vue',
    './src/components/Navbar.vue',
    './src/components/ProfileCard.vue',
    './src/components/FeaturedWork.vue'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button-gray': '#9D9D9D',
        'primary-gray-1': '#323232B2',
        'primary-gray-2': '#202020',
      },
      textColor: {
        'off-white': '#DEDEDE',
        'gray-1': '#959595'

      },
      fontFamily: {
        'niramin': ['Niramit', 'Sans-serif'],
        'bv': ['Baskervville', 'serif'],
      }
    }
  },
  plugins: []
}
