import * as React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export const ActorsPageContainer = () => {

  const [actors, setActors] = useState([]);
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/person/popular")
      .then(res=>{
        console.log(res);
      });
  }, []);
  

  return (
    <Box>
      people
    </Box>
  );
};