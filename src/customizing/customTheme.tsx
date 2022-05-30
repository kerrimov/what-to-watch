import React from "react";
import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5fafbe",
      light: "#92e1f1",
      dark: "#297f8e"
    },
    secondary: {
      main: "#f8d8cc",
      light: "#ffffff",
      dark: "#c5a79b"
    },
  },
});

export default customTheme;