import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_TOKEN } from "../../shared/api/api";
import { useDispatch, useSelector } from "react-redux";
import { actorsActions } from "../../store/store";
import { ActorCard } from "./ActorCard";
import { Grid, Typography } from "@mui/material";
import { Pagination } from "./ActorsPagination/Pagination";

interface RootState {
  actors: any;
}

export const ActorsPageContainer = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const actors = useSelector((state: RootState)=>state.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_TOKEN}&page=${currentPage}`)
      .then(res=>{
        const actors = res.data.results.map((actor: any)=>{
          const array = actor.known_for.map((film: any)=>{
            if (film.media_type === "movie") {
            return film.original_title;
          }
          else if (film.media_type === "tv") {
            return film.original_name;
          }
        });
          return ({ 
            id: actor.id,
            name: actor.name,
            knownFor: array.join(", ").slice(0, 40)+"...",
            img: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
          });
        });
        dispatch(actorsActions.setActors({actors: actors}));
      });
  }, [currentPage]);
  
  return (
    <>
    <Grid container spacing={1} sx={{pl: "6rem"}}>
      <Typography variant="h4" sx={{width: "100%", mt: "40px", mb: "40px"}} paragraph>Popular people</Typography>
        {actors && 
          actors.map((actor: any, index: any)=> {
            return <Grid item key={index} xs={12} md={3}><ActorCard {...actor}/></Grid>;
          })
        }
    </Grid>
    {
      actors && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    }
    </>
  );
};