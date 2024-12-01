/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d", 
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
        black: {
          DEFAULT: "#000000",
          80: "rgba(0,0,0,0.8)" 
        }
      },
      screens: {
        'xs': '400px' 
      },
      maxWidth: {
        'screen-max': '1440px'
      }
    },
  },
  plugins: [],
};