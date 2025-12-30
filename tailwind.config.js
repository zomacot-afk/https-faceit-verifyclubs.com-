/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F50',
        'bg-dark': '#1A1A1D',
        'bg-header': 'rgba(11, 11, 15, 0.90)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

