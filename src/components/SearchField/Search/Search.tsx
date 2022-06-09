import * as React from "react";
import { Input } from "@mui/material";

const style = {
  bgcolor: "secondary.light",
  "&::after": {
    borderBottom: "none",
  },
  "&::before": {
    content: "none",
  },
};

export const Search: React.FC = () => (
  <Input className="input" placeholder="Enter movie name" sx={style} />
);
