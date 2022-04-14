import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      // main: "#FF385C",
      main: "#FF9100",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#000000",
    },
  },
  components: {
    // MuiSelect: {
    //   defaultProps: {
    //     sx: {
    //       fill: "#fff",
    //       color: "#fff",
    //     },
    //   },
    // },
  },
};

export default lightThemeOptions;
