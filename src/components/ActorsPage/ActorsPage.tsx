import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useAppSelector } from "./hooks/hooks";
import { ActorCard } from "./ActorCard/ActorCard";
import { fetchActors } from "./ActorsApi/services/services";
import { Actor } from "./types/actors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

export const ActorsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const actors = useAppSelector((state) => state.actors.actors);

  useEffect(() => {
    dispatch(fetchActors());
  }, []);

  return (
    <Grid container spacing={1} sx={{ pl: "6rem" }}>
      {actors &&
        actors.map((actor: Actor, index: number) => {
          return (
            <Grid item key={index} xs={12} md={3}>
              <ActorCard {...actor} />
            </Grid>
          );
        })}
    </Grid>
  );
};
