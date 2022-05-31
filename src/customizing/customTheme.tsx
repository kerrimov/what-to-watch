import React from "react";
import { createTheme } from "@mui/material";
import variables from "../shared/variables.scss"

const customTheme = createTheme({
  palette: {
    primary: {
      main: variables.primaryMain,
      light: variables.primaryLight,
      dark: variables.primaryDark
    },
    secondary: {
      main: variables.secondaryMain,
      light: variables.secondaryLight,
      dark: variables.secondaryDark
    },
  },
});

export default customTheme;