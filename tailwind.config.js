/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}", // Include all Vue components
    "./layouts/**/*.{vue,js,ts}", // Include layout files
    "./pages/**/*.{vue,js,ts}", // Include pages
    "./app.vue", // Main app fil
  ],
  theme: {
    extend: {
      fontFamily: {
        Libra_Baskerville: ['Libra_Baskerville', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

