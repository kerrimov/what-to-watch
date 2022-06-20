import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

export const Logo = () => (
  <Link to="/">
    <img className="logo" src={logo} alt="logo" />
  </Link>
);
