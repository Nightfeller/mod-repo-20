/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'paletteBlack': '#000000',
      'paletteRichBlack': '#0C1821',
      'paletteOxfordBlue': '#1B2A41',
      'paletteCharcoal': '#324A5F',
      'paletteLavender': '#CCC9DC',
    },
  },
  plugins: [],
}

