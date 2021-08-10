module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
      fontFamily: {
        display: [
          'Poppins',
          'system-ui',
          '-apple-system', 
          'Roboto', 
          '"Helvetica Neue"', 
          'sans-serif',
        ],
        body: [
          'Inter', 
          'system-ui',
          '-apple-system', 
          'Roboto', 
          '"Helvetica Neue"', 
          'sans-serif',
        ],
      },
      screens: {
        hv: { raw: '(hover: hover)' },
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
