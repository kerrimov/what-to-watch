import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"; 
import { ThemeProvider } from "@mui/material";
import App from "./App";
import customTheme from "./theme/customTheme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </ThemeProvider>
  </React.StrictMode>,
);
