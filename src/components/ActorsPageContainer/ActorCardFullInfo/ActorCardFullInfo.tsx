import * as React from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_TOKEN } from "../../../shared/api/api";

interface Actor {
  actor: {
    id: number;
    name: string;
    birthday: string;
    known_for_department: string;
    place_of_birth: string;
    profile_path: string;
    biography: string;
    popularity: string;
  }
}

const styles = {
  wrapper: {
    display: "flex",
    margin: "10px 10px 10px 10px",
    color: "primary.dark",
  },
  leftSideBar: {
    display: "flex", 
    flexDirection: "column",
  },
  main: {
    width: "70%",
  },
  avatar: {
    width: 400,
    height: 600,
    borderRadius: "10px",
    margin: "0 20px 20px 0",
  },
  heading: {
    paddingTop: "20px",
  }
};


export const ActorCardFullInfo = () => {

  const [actor, setActor] = useState<any>();
  const [showMore, setShowMore] = useState<boolean>(false);
  const actorId = useParams();
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${actorId.id}?api_key=${API_TOKEN}`)
      .then(res=>{
        setActor(res.data);
      }); 
  }, []);
  
  console.log(actor);
  return (
      <Box sx={styles.wrapper}>
        <Box sx={styles.leftSideBar}>
            <Avatar src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`} alt={actor?.name} variant="square" sx={styles.avatar}/>
            <Typography variant="h4">Personal Info</Typography>
            <Typography variant="h5" sx={styles.heading}>Known For</Typography>
            <Typography variant="h6">{actor?.known_for_department}</Typography>
            <Typography variant="h5" sx={styles.heading}>Birthday</Typography>
            <Typography variant="h6">{actor?.birthday}</Typography>
            <Typography variant="h5" sx={styles.heading}>Place of Birth</Typography>
            <Typography variant="h6">{actor?.place_of_birth}</Typography>
            <Typography variant="h5" sx={styles.heading}>Popularity</Typography>
            <Typography variant="h6">{actor?.popularity}</Typography>
        </Box> 
         <Box sx={styles.main}>
            <Typography variant="h3">{actor?.name}</Typography>
            <Typography variant="h5" sx={styles.heading}>Biography</Typography>
            <Typography>{ showMore ? actor?.biography: actor?.biography.slice(0, 400) + "..." }</Typography>
              { !showMore &&
                <Button onClick={()=>{setShowMore(true);}}>Show more &gt;</Button>
              } 
        </Box>
      </Box>
  );
};