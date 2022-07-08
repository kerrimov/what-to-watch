import React from "react";
import { Link } from "react-router-dom";
import { Path } from "../../Router/PathList";

export const Navigation = () => (
  <>
    <Link to={Path.HOME} className="menu-item">
      Movies
    </Link>
    <Link to={Path.TV} className="menu-item">
      TV Shows
    </Link>
    <Link to={Path.PEOPLE} className="menu-item">
      People
    </Link>
    <Link to={Path.MORE} className="menu-item">
      More
    </Link>
  </>
);
