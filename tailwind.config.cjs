/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // to generate utilities as !important
  content: [
    // add the paths to all of your template files
    "./src/**/*.{js,jsx}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      // add new font family
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["32px", "40px"],
    },
    fontWeight: {
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      "extra-bold": 800,
      black: 900,
    },
    colors: {
      // custom color palette
      primary: "#441151",
      secondary: "#EE85B5",
      violet: "#883677",
      congo: "#FF958C",
      success: "#5FC790",
      warning: "#FFA600",
      danger: "#FF5630",
      dark: "#2E3A44",
      info: "#1CA7EC",
      black: "#2E3A44",
      grey1: "#A0AABF",
      grey2: "#C0C6D4",
      grey3: "#E3E8F1",
      light: "#F9FBFC",
      white: "#FFF",
      base: "#001529",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
