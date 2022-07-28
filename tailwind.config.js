module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "node_modules/tv-*/dist/tv-*.umd.min.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0D3440',
        secondary: '#EAFBB1',
        info: '#759679'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
