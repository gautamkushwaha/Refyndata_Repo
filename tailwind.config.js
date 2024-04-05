/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily:{
      inter:["Inter","sans-serif"],
      roboto:["Roboto","sans-serif"],
      grotesk:["Space Grotesk","sans-serif"],
      poppins:["Poppins","sans-serif"]
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'pro':'900px',
      'lg': '1060px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

