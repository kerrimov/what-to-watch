import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Card } from "../../types/CardTypes";
import { Endpoints } from "../constants/endpoints";
import { cardActionTypes } from "../constants/cardActionTypes";

const key = process.env.REACT_APP_MOVIEDB_API_KEY;

export const fetchPopularMovies = createAsyncThunk(
  cardActionTypes.getCards,
  async () => {
    const apiResponse: Array<Card> = await axios.get(`${Endpoints.POPULAR_MOVIE}${key}&language=en-US&page=1`)
    .then((response) => response.data.results);
    return apiResponse;
  }
);