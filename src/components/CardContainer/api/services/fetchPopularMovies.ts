import { createAsyncThunk } from "@reduxjs/toolkit";
import { Endpoints } from "../constants/endpoints";

const key = process.env.REACT_APP_MOVIEDB_API_KEY;
const getCards = "getCards";

export const fetchPopularMovies = createAsyncThunk(
  getCards,
  async () => {
    const response = await fetch(`/api`);
    const data = await response.json();
    return (data.results);
  }
);