import React from "react";
import Footer from "./components/Footer/Footer";
import { CardContainer } from "./components/CardContainer/CardContainer";
import { Header } from "./components/Header";
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { Trailers } from "./components/Trailers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CardContainer />
      <Trailers />
      <Footer />
      <Router />
    </BrowserRouter>
  );
}

export default App;
