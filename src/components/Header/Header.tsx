import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { Navigation } from "./components/Navigation";
import "./style.scss";
import logo from "./logo.svg";

export const Header = () => (
  <AppBar className="header">
    <Container>
      <Toolbar>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <Navigation />
          <Link to="/" className="login-link">Login</Link>
          <Link to="/" className="search-btn">
            <SearchIcon />
          </Link>
      </Toolbar>
    </Container>
  </AppBar>
);
