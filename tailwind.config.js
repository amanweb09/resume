/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          head: '#1A1A1A',
          message: '#191919'
        },
        light: {
          head: '#E1E1E1',
          message: '#D8D8D8'
        },
        'green-custom': '#00A32E',
        blue: {
          message: '#0159C0',
          general: '#001AFF'
        }
      }
    },
  },
  plugins: [],
}
