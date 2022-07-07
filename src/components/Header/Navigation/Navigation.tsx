import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <>
    <Link to="/" className="menu-item">Movies</Link>
    <Link to="/tvshows" className="menu-item">TV Shows</Link>
    <Link to="/people" className="menu-item">People</Link>
    <Link to="/more" className="menu-item">More</Link>
  </>
);
