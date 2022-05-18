module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // important: "#root",
  theme: {
    extend: {
      screens: {
        "tiny-mobile": "250px",
        "xs-mobile": "300px",
        xs: "320px",
      },
      breakPoints: {
        xxs: "(max-width: 300px)",
        "2xs": "350px",
      },
      colors: {
        // primary: "#FF385C",
        // secondary: "#FF385C",
        primary: "#FF9100",
        "primary-dark": "#E28100",
        secondary: "#3D3D3D",
        error: "#f00",
        grey: "#eee",
      },
      width: {
        98: "410px",
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
        28: "7rem",
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
};
