/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust the content path to match your project
  theme: {
    screens: {
      xs: "375px",
      xsm: "450px",
      xsl: "540px",
      sl: "600px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1320px',
    },
    extend: {
      fontFamily: {
        bespoke: ['BespokeSerif-Variable', 'serif'],
        cabinet: ['CabinetGrotesk-Variable', 'sans-serif'],
        chillax: ['Chillax-Variable', 'sans-serif'],
        generalSans: ['GeneralSans-Variable', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      colors: {
        // Neutral Colors
        neutral: {
          100: '#FFFFFF', // white
          200: '#F2F2F2', // white-smoke
          300: '#E6E6E6', // light-gray
          400: '#D9D9D9', // silver-gray
        },
        // Gray Shades
        gray: {
          100: '#666666', // dim-gray
          200: '#4D4D4D', // charcoal
          300: '#262626', // gunmetal
          400: '#0E0E0C', // dark-charcoal
        },
        // Beige Tones
        beige: {
          light: {
            100: '#FAFAF9', // ivory
            200: '#E8E8E3', // alabaster
            300: '#DDDDD5', // light-taupe
            400: '#D1D1C7', // ash-beige
          },
          dark: {
            300: '#AEAE9D', // stone-beige
            400: '#8C8C73', // earth-taupe
          },
        },
      }
    },
  },
  plugins: [],
};
