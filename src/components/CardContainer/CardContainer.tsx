import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import cardTemplates from "../../mocks/cardData";

export default function BasicGrid() {

  return (
    <Box sx={{ mx: "auto", mt: 10, maxWidth: 1300, flexGrow: 1 }}>
      <Grid justifyContent="space-around" container>
        {cardTemplates}
      </Grid>
    </Box>
  );
}