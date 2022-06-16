import React from "react";
import { CardContainer } from "./components/CardContainer";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Router } from "./components/Router";

function App() {
  return (
    <>
      <CardContainer />
      <Footer />
        <Header />
        <Router />
    </>
  );
}

export default App;