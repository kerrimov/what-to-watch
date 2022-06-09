import { createTheme } from "@mui/material";
import variables from "../shared/styles/variables.scss";

const customTheme = createTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
      light: variables.primaryLight,
      dark: variables.primaryDark,
      contrastText: variables.primaryText,
    },
    secondary: {
      main: variables.secondaryMain,
      light: variables.secondaryLight,
      dark: variables.secondaryDark,
      contrastText: variables.secondaryText,
    },
  },
});

export default customTheme;
