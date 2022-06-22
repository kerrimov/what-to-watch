import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { cardData } from "../../mocks/cardData";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "./reducers/cardContainerReducer"
import { store } from "../../store";

export const CardContainer = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies())
  },[dispatch]);

  const cardData = useSelector(state => state.cards.cards)

  return (
    <Box sx={{ mx: "auto", mt: 10, maxWidth: 1300, flexGrow: 1 }}>
      <Grid justifyContent="space-around" container>
        {cardData.map((card) => (
          <Grid item xs={6} sm={4} md={3} lg={1.7} key={card["id"]}>
            <FilmCard
              image={`https://www.themoviedb.org/t/p/w220_and_h330_face${card["poster_path"]}`}
              name={card["original_title"]}
              date={card["release_date"]}
              rating={card["vote_average"]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};