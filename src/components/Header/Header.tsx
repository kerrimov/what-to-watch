import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { LoginLink } from "./LoginLink";
import "./Header.scss";

export const Header = () => (
  <AppBar>
    <Toolbar className="header">
      <div className="left-container">
        <Logo />
        <Navigation />
      </div>
      <div className="right-container">
        <LoginLink />
      </div>
    </Toolbar>
  </AppBar>
);
