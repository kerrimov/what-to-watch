import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5fafbe",
      light: "#92e1f1",
      dark: "#297f8e",
      contrastText: "#f0f0f0",
    },
    secondary: {
      main: "#f8d8cc",
      light: "#ffffff",
      dark: "#c5a79b",
      contrastText: "rgba(0,0,0,.6)",
    },
  },
});

export default customTheme;
