import React from "react";
import { Button, Box } from "@mui/material";
import { socialLinks } from "../mocks/LinksData";

export const Social = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "200px",
  };

  return (
    <Box sx={styles}>
      {socialLinks.map(({icon: IconName, url }, index) => (
        <Button
        key={index}
        href={url}
        target="_blank"
      >
        <IconName color="secondary" fontSize="large" />
      </Button>
      ))}
    </Box>
  );
};