import * as React from "react";
import { Box, Grid } from "@mui/material";
import { VideoCard } from "./VideoCard/VideoCard";
import { getTrailersData } from "../api/services/getTrailersData";
import { cardData } from "../../../mocks/cardData";

const trailersData = getTrailersData(cardData);

export const GridCard = () => (
  <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
    {trailersData.map((card) => (
      <Grid container justifyContent="space-around" key={card["id"]}>
        <Grid item xs>
          <VideoCard filmName={card["original_title"]} img={card["backdrop_path"]} trailerKey={card["key"]} />
        </Grid>
      </Grid>
    ))}
  </Box>
);