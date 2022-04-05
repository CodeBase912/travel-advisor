module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // important: "#root",
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        primary: "#FF385C",
        "primary-dark": "#972439",
        secondary: "#FF385C",
        error: "#f00",
        grey: "#eee",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      height: {
        "60p": "60vh",
        "70p": "70vh",
        "80p": "80vh",
      },
      minHeight: {
        1: "1px",
        5: "5px",
        10: "10px",
        20: "100px",
        50: "300px",
        80: "400px",
      },
      minWidth: {
        40: "10rem",
      },
    },
  },
  plugins: [],
};
