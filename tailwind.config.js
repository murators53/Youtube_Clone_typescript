/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        youtube:'#ff0000'
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
