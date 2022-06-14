import * as React from "react";
import { Card, Grid, CardMedia, Typography, CardActionArea, Checkbox } from "@mui/material";
import CircularProgressWithLabel from "../RaitingLabel/RaitingLabel";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import CardInfoSection from "../CardInfoSection/CardInfoSection";

export default function MultiActionAreaCard() {
  const progress = 77;
  return (
    <Card sx={{ maxWidth: 160, boxShadow: 0, margin: "auto" }}>
      <CardActionArea href="#">
        <Grid container justifyContent="flex-end" padding={0}>
          <Checkbox
            icon={<FavoriteBorder sx={{ color: "primary.main" }} />}
            checkedIcon={<Favorite />}
            sx={{ p: 0.5 }}
            title="add to favorite"
          />
        </Grid>
        <CardMedia
          sx={{ borderRadius: 3, mt: -4 }}
          component="img"
          height="225"
          image="https://www.themoviedb.org/t/p/w440_and_h660_face/daeVrgyj0ue8qb3AHyU3UeCwoZz.jpg"
          alt="american siege"
        />
      </CardActionArea>
      <Grid
        container
        justifyContent="flex-start"
        padding={1}
        sx={{ mt: -3.5 }}
      >
        <CircularProgressWithLabel value={progress} />
      </Grid>
      <CardInfoSection />
      <Typography color="text.secondary" sx={{ pr: 1, pl: 1 }}>
        23 Apr 2022
      </Typography>
    </Card>
  );
}