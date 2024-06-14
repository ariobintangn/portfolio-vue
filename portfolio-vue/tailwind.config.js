/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'button-gray': '#9D9D9D',
        'primary-gray-1': '#323232B2',
        'primary-gray-2': '#202020',
        'off-white': '#DEDEDE',
        'gray-1': '#959595'
      },
      fontFamily: {
        niramin: ['Niramit', 'Sans-serif'],
        bv: ['Baskervville', 'serif']
      }
    }
  },
  plugins: []
}
