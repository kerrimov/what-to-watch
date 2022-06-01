import React from "react";
import { Box, Typography, Link } from "@mui/material";

export const Copyright = () => {
  
  const date = new Date();
  const fullDate = `${date.getFullYear()}`;
  const style = {
    display: "flex",
    width: "190px",
    justifyContent: "space-evenly",
    color: "text.secondary"
  };

  return (
    <Box>
      <Typography variant="body2" sx={style}>
          Copyright @
        <Link color="inherit" href="https://softserveinc.com/">
          SoftServe
        </Link> 
          {fullDate}
      </Typography>
    </Box>
  );
};