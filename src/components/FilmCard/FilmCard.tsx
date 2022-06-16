import * as React from "react";
import { Card, Grid, CardMedia, Typography, CardActionArea, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { CardInfoSection } from "../CardInfoSection/CardInfoSection";
import { CircularProgressWithLabel } from "../RaitingLabel/RaitingLabel";

interface Props {
  image: string;
  name: string;
  date: string;
  rating: number;
}

export const FilmCard = ({ image, name, date, rating }: Props) => (
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
        image={image}
        alt={name}
      />
    </CardActionArea>
    <Grid
      container
      justifyContent="flex-start"
      padding={1}
      sx={{ mt: -3.5 }}
    >
      <CircularProgressWithLabel value={rating} />
    </Grid>
    <CardInfoSection name={name} />
    <Typography color="text.secondary" sx={{ fontSize: "0.9rem", pr: 1, pl: 1 }}>
      {date}
    </Typography>
  </Card>
);