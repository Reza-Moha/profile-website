/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "Poppins" : ["Poppins" ,"sans-serif"]
    },

    extend: {
      rotate:{
        "270" : "270deg"
      },
    },
  },
  plugins: [],
}