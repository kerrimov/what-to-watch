import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { FilmCard } from "./FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "./api/services/fetchPopularMovies";
import { Endpoints } from "./api/constants/endpoints";
import { Card } from "./types/CardTypes";
import { AppDispatch, RootState } from "../../store";
import { ErrorMessage } from "../../shared/ErrorMessage";
import { DownloadProgress } from "../../shared/DownloadProgress";

export const CardContainer = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  const cardData = useSelector<RootState, Array<Card>>(state => state.cardsSlice.cards);
  const loadingStatus = useSelector<RootState, null | boolean>(state => state.cardsSlice.status);

  switch (loadingStatus) {
    case true:
      return (
        <Box sx={{ mx: "auto", mt: 10, maxWidth: 1300, flexGrow: 1 }}>
          <Grid justifyContent="space-around" container>
            {cardData.map((card: Card) => (
              <Grid item xs={6} sm={4} md={3} lg={1.7} key={card["id"]}>
                <FilmCard
                  image={`${Endpoints.PHOTO_BASE_ENDPOINT}${card["poster_path"]}`}
                  name={card["original_title"]}
                  date={card["release_date"]}
                  rating={card["vote_average"]}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    case false:
      return (
        <ErrorMessage />
      );
    default:
      return (
        <DownloadProgress />
      );
  }
};