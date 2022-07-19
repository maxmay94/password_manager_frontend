const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: colors.warmGray,
        sky: colors.sky,
        amber: colors.amber,
        emerald: colors.emerald,
        slate: colors.coolGray
      }
    },
  },
  plugins: [],
}
