import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "./api/services/fetchPopularMovies";
import { Endpoints } from "./api/constants/endpoints";
import { Card, InitialCardsState } from "./types/CardTypes";
import { AppDispatch, RootState } from "../../store";
import { ErrorMessage } from "../../shared/ErrorMessage";
import { Loader } from "../../shared/Loader";

export const CardContainer = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const cardSliceData = useSelector<RootState, InitialCardsState>(state => state.cardsSlice);

  if (Object.keys(cardSliceData.error).length) {
    return (<ErrorMessage error={cardSliceData.error} />);
  }

  return (cardSliceData.status
      ? <Box sx={{ mx: "auto", mt: 15, maxWidth: 1300, flexGrow: 1 }}>
          <Grid justifyContent="space-around" container>
            {cardSliceData.cards.map((card: Card) => (
              <Grid item xs={6} sm={4} md={3} lg={1.7} key={card["id"]}>
                <FilmCard
                  image={`${Endpoints.PHOTO_W220_H330}${card["poster_path"]}`}
                  name={card["original_title"]}
                  date={card["release_date"]}
                  rating={card["vote_average"]}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      : <Loader />
  );
};