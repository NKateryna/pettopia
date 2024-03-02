import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#011240", // active
    },
    secondary: {
      main: "#f2cc85", // accent
    },
    text: {
      primary: "#161616", // txtPrimary
      secondary: "#ffffff", // txtWhite
    },
    action: {
      hover: "#3786a5",
      active: "#317b98", // press
      disabled: "#b2b2b2",
    },
  },
});

export default theme;
