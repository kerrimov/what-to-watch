import * as React from "react";
import {  Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router";


interface Props {
  id: number;
  name: string;
  img: string;
  knownFor: string;
}

export const ActorCard = ({id, name, img, knownFor}: Props) => {

  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 250 }} onClick={()=>navigate(`/person/${id}`)}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {knownFor}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
};