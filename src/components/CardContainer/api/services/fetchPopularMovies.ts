import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Card } from "../../types/CardTypes";
import { Endpoints } from "../constants/endpoints";

const key = process.env.REACT_APP_MOVIEDB_API_KEY;
const getCards = "getCards";

export const fetchPopularMovies = createAsyncThunk(
  getCards,
  async () => {
    const apiResponse: Array<Card> = await axios.get(`${Endpoints.POPULAR_MOVIE_BASE_EP}${key}&language=en-US&page=1`)
    .then((response) => response.data.results);
    return apiResponse;
  }
);