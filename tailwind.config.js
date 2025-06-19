/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
        },
        cyan: {
          400: "#22d3ee",
        },
      },
    },
  },
  plugins: [],
}
