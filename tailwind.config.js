/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/Components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "manga": "#fcb045",
      },
    },
  },

  plugins: [],
}

