module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '18':'18rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
