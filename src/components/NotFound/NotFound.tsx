import React from "react";
import { Link } from "react-router-dom";
import "../../shared/styles/styles.scss";

export const NotFound = () => (
    <div className="wrapper">
      This page does not exist. Go <Link to="/">home</Link>
    </div>
  );