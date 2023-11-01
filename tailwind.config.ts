module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent-one': 'rgb(var(--color-accent-one))',
        'accent-two': 'rgb(var(--color-accent-two))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
