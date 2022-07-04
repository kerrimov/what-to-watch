import React from "react";
import { Search } from "./Search";
import { searchMovie } from "./api/searchMovie";
import { SecondaryButton } from "../../shared/SecondaryButton";
import { Box } from "@mui/material";
import "./SearchField.scss";

export const SearchField: React.FC = () => (
  <Box className="search">
    <Search />
    <SecondaryButton clickHandler={searchMovie}>Search</SecondaryButton>
  </Box>
);
