/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-dark': '#0f0f0f',
        'icon-color' : '#272727',
      }
    },
  },
  plugins: [],
}