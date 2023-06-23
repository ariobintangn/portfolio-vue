/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.vue',
    './src/views/HomeView.vue',
    './src/components/Navbar.vue',
    './src/components/ProfileCard.vue'
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

      }
    }
  },
  plugins: []
}
