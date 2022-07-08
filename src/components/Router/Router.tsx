import React from "react";
import { Routes, Route } from "react-router-dom";
import { TVShows } from "../TVShows";
import { People } from "../People";
import { More } from "../More";
import { NotFound } from "../NotFound";
import { Login } from "../Login";
import { CardContainer } from "../CardContainer";
import { Path } from "./PathList";

export const Router = () => (
  <Routes>
    <Route path={Path.HOME} element={<CardContainer />} />
    <Route path={Path.TV} element={<TVShows />} />
    <Route path={Path.PEOPLE} element={<People />} />
    <Route path={Path.MORE} element={<More />} />
    <Route path={Path.LOGIN} element={<Login />} />
    <Route path={Path.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
