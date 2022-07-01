import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Endpoints } from "../ActorsApi/constants/Endpoints";
import { Actor } from "../types/actors";
import { useNavigate } from "react-router-dom";

export const ActorCard: React.FC<Actor> = ({id,name, known_for, profile_path }: Actor) => {
  const navigate = useNavigate();

  const filmList = known_for.reduce((acc: string[], item) => {
    if (Object.prototype.hasOwnProperty.call(item ,"original_name")) {
      acc.push(item.original_name);
    } else {
      acc.push(item.original_title);
    }
    return acc;
  }, []);

  const knownFor = filmList.join(", ").slice(0, 40) + "...";

  return (
     <Card sx={{ maxWidth: 250 }} onClick={() => navigate(`${Endpoints.ACTOR}${id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${Endpoints.IMAGE_PATH}${profile_path}`}
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
