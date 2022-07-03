import * as React from "react";
import { Box, Grid } from "@mui/material";
import { VideoCard } from "./VideoCard/VideoCard";
import { cardData } from "../../../mocks/cardData";

 const GridCard: React.FC = () => {
   const gridBox = cardData.slice(0,4).map((card) => {
     return (
       <Grid container justifyContent="space-around" key={card["id"]}>
          <Grid item xs>
            <VideoCard filmName={card["original_title"]} img={card["backdrop_path"]} />
          </Grid>
        </Grid>
      );
    });
   return (<Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}> {gridBox}</Box>
  );
};

export default GridCard;