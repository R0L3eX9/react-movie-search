module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#1327f9',
        secondary: '#fcd602',
        background: '#2566e8',
      },
      fontFamily: {
        pop: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
