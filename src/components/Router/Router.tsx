import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Movies } from "../Movies";
import { TVShows } from "../TVShows";
import { People } from "../People";
import { More } from "../More";
import { NotFound } from "../NotFound";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tvshows" element={<TVShows />} />
    <Route path="/people" element={<People />} />
    <Route path="/more" element={<More />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
