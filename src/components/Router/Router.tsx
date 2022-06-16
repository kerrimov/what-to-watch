import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { MoviesPage } from "../pages/MoviesPage";
import { TVShows } from "../pages/TVShows";
import { People } from "../pages/People";
import { More } from "../pages/More";
import { NotFoundPage } from "../pages/NotFoundPage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/tvshows" element={<TVShows />} />
    <Route path="/people" element={<People />} />
    <Route path="/more" element={<More />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
