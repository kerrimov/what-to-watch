import React from "react";

import { ThemeProvider } from "@mui/material";
import customTheme from "./theme/customTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
      
      </ThemeProvider>
    </>
  );
}

export default App;
