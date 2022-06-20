import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1471ff7 (App test updated)
import { Home } from "../Home";
import { Movies } from "../Movies";
import { TVShows } from "../TVShows";
import { People } from "../People";
import { More } from "../More";
import { NotFound } from "../NotFound";
<<<<<<< HEAD

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tvshows" element={<TVShows />} />
    <Route path="/people" element={<People />} />
    <Route path="/more" element={<More />} />
    <Route path="*" element={<NotFound />} />
=======
import { Homepage } from "../pages/Homepage";
import { MoviesPage } from "../pages/MoviesPage";
import { TVShows } from "../pages/TVShows";
import { People } from "../pages/People";
import { More } from "../pages/More";
import { NotFoundPage } from "../pages/NotFoundPage";
=======
>>>>>>> 1471ff7 (App test updated)

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/tvshows" element={<TVShows />} />
    <Route path="/people" element={<People />} />
    <Route path="/more" element={<More />} />
<<<<<<< HEAD
    <Route path="*" element={<NotFoundPage />} />
>>>>>>> 65770e6 (styles updated)
=======
    <Route path="*" element={<NotFound />} />
>>>>>>> 1471ff7 (App test updated)
  </Routes>
);
