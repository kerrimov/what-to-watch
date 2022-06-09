import React from "react";
import { Search } from "./Search/Search";
import { SecondaryButton } from "../../shared/SecondaryButton/SecondaryButton";
import { Box } from "@mui/material";
import "./SearchField.scss";

export const SearchField: React.FC = () => (
  <Box className="search">
    <Search />
    <SecondaryButton>Search</SecondaryButton>
  </Box>
);
