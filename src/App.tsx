import React from "react";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
