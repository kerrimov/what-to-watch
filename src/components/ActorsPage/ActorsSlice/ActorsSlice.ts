import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchActors } from "../ActorsApi/services/services";
import { Actor, ActorsState } from "../types/actors";

const initialState: ActorsState = {
  actors: [],
  isFetching: false,
  error: "",
};

export const actorsSlice = createSlice({
  name: "actors",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActors.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchActors.fulfilled.type]: (state, action: PayloadAction<Actor[]>) => {
      state.isFetching = false;
      state.error = "";
      state.actors = action.payload;
    },
    [fetchActors.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});
