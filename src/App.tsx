import React from "react";
import { CardContainer } from "./components/CardContainer/CardContainer";
import { Routes, Route } from "react-router-dom";
import { ActorsPageContainer } from "./components/ActorsPageContainer";
import { ActorCard } from "./components/ActorsPageContainer/ActorCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardContainer />} />
      <Route path="/people" element={<ActorsPageContainer />} />
      <Route path="/people/:id" element={<ActorCard />} />
    </Routes>
  );
}

export default App;
