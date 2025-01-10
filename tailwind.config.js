/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust the content path to match your project
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        quattrocento: ['Quattrocento', 'serif'],
      },
    },
  },
  plugins: [],
};
