import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FF4DC4",
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
