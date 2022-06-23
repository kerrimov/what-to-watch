import * as React from "react";
import { Card } from "@mui/material";
import { useParams } from "react-router";

export const ActorCard = () => {

  const {id} = useParams();

  return (
  <Card>
    {id}
  </Card>
  );
};