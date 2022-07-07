import React from "react";
import { Routes, Route } from "react-router-dom";
import { TVShows } from "../TVShows";
import { People } from "../People";
import { More } from "../More";
import { NotFound } from "../NotFound";
import { Login } from "../Login";
import { CardContainer } from "../CardContainer";

export const Router = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<CardContainer />} />
    <Route path="/tvshows" element={<TVShows />} />
    <Route path="/people" element={<People />} />
    <Route path="/more" element={<More />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
