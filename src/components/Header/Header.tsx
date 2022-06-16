import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar} from "@mui/material";
import { Navigation } from "./components/Navigation";
import { SearchField } from "../SearchField";
import "./style.scss";
import logo from "./logo.svg";


const style = {
  bgcolor: "primary.dark",
};

export const Header = () => (
  <AppBar>
          <Toolbar  className="header" sx={style}>

         <div className="left-container">
             <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
             <Navigation />
          </div>
          <div className="right-container">
          <SearchField />
          <Link to="/" className="login-link">Login</Link>
          </div>

      </Toolbar>
  </AppBar>
);
