import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link, CardActions, Grid } from "@mui/material";
import CircularProgressWithLabel from "../RaitingLabel/RaitingLabel";

export default function MultiActionAreaCard() {
  const progress = 77;
  return (
    <Card sx={{ maxWidth: 160 }}>
      <CardMedia
        component="img"
        height="225"
        image="	https://www.themoviedb.org/t/p/w440_and_h660_face/daeVrgyj0ue8qb3AHyU3UeCwoZz.jpg"
        alt="american siege"
      />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        padding={1}
        sx={{mt: -3.5}}
      >
        <CircularProgressWithLabel value={progress} />
      </Grid>
      <CardActions sx={{ maxHeight: 10 }}>
        <h3>
          <Link href="#" underline="none">
            {'American siege'}
          </Link>
        </h3>
      </CardActions>
      <CardActions sx={{ maxHeight: 10 }}>
        <p>
          23 Apr 2022
        </p>
      </CardActions>
    </Card>
  );
}