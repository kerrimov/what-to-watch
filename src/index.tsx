import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import customTheme from "./theme/customTheme";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
