import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "../api/services/fetchPopularMovies";
import { InitialCardsState, PayloadCards } from "../types/CardTypes";

const cardContainerSlice = createSlice({
  name: "cardContainerSlice",
  initialState: {
    cards: [],
    status: null,
  },
  reducers: {},
  extraReducers: (loadCardData) => {
    loadCardData.addCase(fetchPopularMovies.fulfilled, (state: InitialCardsState, action: PayloadCards) => {
      state.status = true;
      state.cards = action.payload;
    });
    loadCardData.addCase(fetchPopularMovies.rejected, (state: InitialCardsState) => {
      state.status = false;
    });
  },
});

export default cardContainerSlice.reducer;