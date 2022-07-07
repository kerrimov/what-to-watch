import * as React from "react";
import { Box, Grid } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { cardData } from "../../mocks/cardData";

export const CardContainer = () => {
  return (
    <Box sx={{ mx: "auto", mt: 15, maxWidth: 1300, flexGrow: 1 }}>
      <Grid justifyContent="space-around" container>
        {cardData.map((card) => (
          <Grid item xs={6} sm={4} md={3} lg={1.7} key={card["id"]}>
            <FilmCard
              image={card["poster_path"]}
              name={card["original_title"]}
              date={card["release_date"]}
              rating={card["vote_average"]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};