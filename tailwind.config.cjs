module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('daisyui')
  ],
  theme: {
    fontFamily: {
      sans: '"Lato"',
      mono: '"Noto Sans Mono"'
    },
    extend: {}
  },
};