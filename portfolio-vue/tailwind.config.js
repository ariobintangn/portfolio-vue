/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.vue',
    './src/views/HomeView.vue',
    './src/components/Navbar.vue'
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-gray-1": "#323232B2",
        "primary-gray-2": "#202020",
      }
    },
  },
  plugins: [],
}

