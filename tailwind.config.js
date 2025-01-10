/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust the content path to match your project
  theme: {
    extend: {
      colors: {
        background: "#E8E8E3",

        "heading-1" : "#080807",
        "heading-2" : "#D1D1C7",
        "heading-3" : "#7E766C",

        "paragraph-1" : "#6B645C",
        "paragraph-2" : "#A29E9A",
        "paragraph-3" : "#BFBFB1",
        "paragraph-4" : "#524D47",
        "paragraph-5" : "#393632",
        "paragraph-sub" : "#8C8C73",

        "button" : "#393632",
        "button-text" : "#E8E8E3",
        "button-hover" : "",
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        quattrocento: ['Quattrocento', 'serif'],
      },
    },
  },
  plugins: [],
};
