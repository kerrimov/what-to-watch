import React from "react";
import { Search } from "./Search";
import { SecondaryButton } from "../../shared/SecondaryButton";
import { Box } from "@mui/material";
import "./SearchField.scss";


export const SearchField: React.FC = () => (
  <Box className="search">
    <Search />
    <SecondaryButton>Search</SecondaryButton>
  </Box>
);

