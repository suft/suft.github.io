module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins'],
      },
      screens: {
        hv: { raw: '(hover: hover)' },
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
