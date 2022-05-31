import React from "react";

import { ThemeProvider } from "@mui/material";
import customTheme from "./customizing/customTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
      
      </ThemeProvider>
    </>
  );
}

export default App;