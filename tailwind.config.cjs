/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      red: "#F94343",
      yellow: "#FFC107",
      blue: "#4048EF",
      "dark-blue": "#040054",
      gray: "#8C8C8C",
      "light-gray": "#F6F8FF",
    },
    dropShadow: {
      upper: "0px 2px 39px rgba(202, 202, 202, 0.373506)",
    },
    extend: {},
  },
  plugins: [],
};
