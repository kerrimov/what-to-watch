import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { LoginLink } from "./LoginLink";
import { SearchField } from "../SearchField";
import "./style.scss";

const style = {
  bgcolor: "primary.dark",
};

export const Header = () => (
  <AppBar>
    <Toolbar className="header" sx={style}>
      <div className="left-container">
        <Logo />
        <Navigation />
      </div>
      <div className="right-container">
        <SearchField />
        <LoginLink />
      </div>
    </Toolbar>
  </AppBar>
);
