module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        secondary: "#FF385C",
        error: "#f00",
        grey: "#eee",
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
