import React from "react";
import { CardContainer } from "./components/CardContainer/CardContainer";
import { Routes, Route } from "react-router-dom";
import { ActorsPageContainer } from "./components/ActorsPageContainer";
import { ActorCardFullInfo } from "./components/ActorsPageContainer/ActorCardFullInfo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<CardContainer />} />
      <Route path="/people" element={<ActorsPageContainer />} />
      <Route path="/person/:id" element={<ActorCardFullInfo />} />
    </Routes>
  );
}

export default App;