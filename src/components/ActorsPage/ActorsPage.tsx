import React, { useEffect } from "react";
//mport { Grid } from "@mui/material";
//import { ActorCard } from "./ActorCard/ActorCard";
import { useDispatch } from "react-redux";

export const ActorsPage: React.FC = () => (

const dispatch = useDispatch()<AppDispatch>

useEffect(()=>{
    dispatch(fetchActors())
})


   

//   <Grid container spacing={1} sx={{ pl: "6rem" }}>
//     {actors &&
//       actors.map((actor: any, index: any) => {
//         return (
//           <Grid item key={index} xs={12} md={3}>
//             <ActorCard {...actor} />
//           </Grid>
//         );
//       })}
//   </Grid>
);
