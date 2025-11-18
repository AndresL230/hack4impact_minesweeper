/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        titlefont: "titlefont",
        selection : "selection"
      },
      colors:{
        title: "#842A3B",
        selection : "#63360c"
      }
    },
  },
};
