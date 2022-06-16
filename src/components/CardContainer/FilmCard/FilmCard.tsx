import * as React from "react";
import { Card, Grid, CardMedia, CardActionArea, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { CardInfoSection } from "./CardInfoSection";
import { RatingLabel } from "./RaitingLabel";

interface Props {
  image: string;
  name: string;
  date: string;
  rating: number;
}

export const FilmCard = ({ image, name, date, rating }: Props) => (
  <Card sx={{ maxWidth: 160, boxShadow: 0, margin: "auto" }}>
    <CardActionArea href="#" sx={{ position: "relative" }}>
      <Grid container justifyContent="flex-end" padding={0} sx={{ position: "absolute" }}>
        <Checkbox
          icon={<FavoriteBorder sx={{ color: "primary.main" }} />}
          checkedIcon={<Favorite />}
          sx={{ p: 0.5, position: "relative", zIndex: 1 }}
          title="add to favorite"
        />
      </Grid>
      <CardMedia
        sx={{ borderRadius: 3, position: "absolute" }}
        component="img"
        height="225"
        image={image}
        alt={name}
      />
      <Grid
        container
        justifyContent="flex-start"
        padding={1}
        sx={{ mt: 0, position: "absolute", top: 195 }}
      >
        <RatingLabel filmRating={rating} />
      </Grid>
    </CardActionArea>
    <CardInfoSection name={name} date={date} />
  </Card>
);