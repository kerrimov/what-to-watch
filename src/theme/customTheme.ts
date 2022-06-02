import { createTheme } from "@mui/material";
import variables from "../shared/variables.scss"

const customTheme = createTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
      light: variables.primaryLight,
      dark: variables.primaryDark,
      contrastText: "#f0f0f0",
    },
    secondary: {
      main: variables.secondaryMain,
      light: variables.secondaryLight,
      dark: variables.secondaryDark,
      contrastText: "rgba(0,0,0,.6)",
    },
  },
});

export default customTheme;
