import React from "react";
import { Search } from "./Search";
import { SecondaryButton } from "../../shared/SecondaryButton";
import { Box } from "@mui/material";
import "./SearchField.scss";

const search = () => {
  console.log("search movie"); 
};

export const SearchField: React.FC = () => (
  <Box className="search">
    <Search />
    <SecondaryButton clickHandler={search}>Search</SecondaryButton>
  </Box>
);
