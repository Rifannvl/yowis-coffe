/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      hijauLumut: "#123821",
      jelly: "#a79132",
      jellyDark: "#736423",
      primary: "#002B5F",
      secondaryGold: "#997B29",
      silver: "#928F8F",
      navy: "#0E0749",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
