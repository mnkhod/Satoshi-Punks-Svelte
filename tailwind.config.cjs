/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        secondary: "#53465F",
      }
    },
  },
  plugins: [require("daisyui")],
}
