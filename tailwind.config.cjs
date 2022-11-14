/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,jsx,jsx}',
    './src/components/**/*.{html,jsx,jsx}',
    './src/components/**/**/*.{html,jsx,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px'
      }
    },
  },
  plugins: [],
}
