import * as React from "react";
import { Box, Grid } from "@mui/material";
import cardData from "../../mocks/cardData.json";
import { FilmCard } from "../FilmCard/FilmCard";

export const CardContainer = () => {
  return (
    <Box sx={{ mx: "auto", mt: 10, maxWidth: 1300, flexGrow: 1 }}>
      <Grid justifyContent="space-around" container>
        {cardData.map((card, index) => {
          return <Grid item xs={6} sm={4} md={3} lg={1.7} key={index}>
                   <FilmCard
                     image={card["default-image-for-card"]}
                     name={card["default-film-name"]}
                     date={card["default-film-date"]}
                     rating={card["film-rating"]}
                   />
                 </Grid>;
        })};
      </Grid>
    </Box>
  );
};