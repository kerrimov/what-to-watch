import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_TOKEN } from "../../shared/api/api";
import { useDispatch, useSelector } from "react-redux";
import { actorsActions } from "../../store/store";
import { ActorCard } from "./ActorCard";
import { Box } from "@mui/material";


interface RootState {
  actors: any
}

export const ActorsPageContainer = () => {

  const actors = useSelector((state: RootState)=>state.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_TOKEN}`)
      .then(res=>{
        const actors = res.data.results.map((actor: any)=>{
          const array = actor.known_for.map((film: any)=>{
            return film.title;
          });
          return ({ 
            id: actor.id,
            name: actor.name,
            knownFor: array.join(", "),
            img: actor.profile_path
          });
          
        });
        console.log(actors);
        dispatch(actorsActions.setActors({actors: actors}));
        console.log(res.data.results);
        
      });
  }, [dispatch]);
  

  return (
    <Box>
      {actors && 
        actors.map((actor: any, index: any)=> {
          return <Box key={index}><ActorCard name={actor.name} id={actor.id} knownFor={actor.knownFor} img={actor.img}/></Box>;
        })
      }
    </Box>
  );
};