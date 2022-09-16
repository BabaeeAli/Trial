/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      mainColor: "#3f504a",
      tabContent: "#e5e5e5",
      padButton:"#6b7280",
      buttonSecondary: "#c0c5c9",
      buttoncyan: "#67e8f9",


    },
  },
  plugins: [require("daisyui")],
}