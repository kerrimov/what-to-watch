import React from "react";
import { ThemeProvider } from "@mui/material";
import customTheme from "./customizing/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <h1>
        What to watch
      </h1>
    </ThemeProvider>
  );
}

export default App;