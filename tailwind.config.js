/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "purple": "#AD1FEA",
      "blue": "#4661E6",
      "navy-blue": "#373F68",
      "white": "#ffffff",
      "offwhite": "#F2F4FF",
      "eggshell": "#F7F8FD",
      "light-navy-blue": "#3A4374",
      "grey": "#647196",
      "peach": "#F49F85",
      "crysyal-blue": "#62BCFA",
      "red": "#D73737"
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif']
    },
    fontSize: {
      h1: ["24px", {letterSpacing: "-0.33"}],
      h2: ["20px", {letterSpacing: "-0.25"}],
      h3: ["18px", {letterSpacing: "-0.25"}],
      h4: ["14px", {letterSpacing: "-0.2"}],
      "body-l": "16px",
      "body-m": "15px",
      "body-s": "13px"
    }
  },
  plugins: [],
}