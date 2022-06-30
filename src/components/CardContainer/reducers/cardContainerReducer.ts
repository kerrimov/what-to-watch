import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "../api/services/fetchPopularMovies";
import { InitialCardsState, PayloadCards, PayloadCardsError } from "../types/CardTypes";

const cardContainerSlice = createSlice({
  name: "cardContainerSlice",
  initialState: {
    cards: [],
    status: false,
    error: {}
  },
  reducers: {},
  extraReducers: (loadCardData) => {
    loadCardData.addCase(fetchPopularMovies.fulfilled, (state: InitialCardsState, action: PayloadCards) => {
      state.status = true;
      state.cards = action.payload;
    });
    loadCardData.addCase(fetchPopularMovies.rejected, (state: InitialCardsState, action: PayloadCardsError) => {
      state.status = false;
      state.error = action.error;
    });
  },
});

export default cardContainerSlice.reducer;