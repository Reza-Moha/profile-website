/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Poppins" : ["Poppins" ,"sans-serif"]
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px",
      "2xl": "1920px",
    },
    extend: {
      rotate:{
        "270" : "270deg"
      },
    },
  },
  plugins: [],
}