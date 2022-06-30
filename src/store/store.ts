import { configureStore } from "@reduxjs/toolkit";
import { actorsSlice } from "../components/ActorsPage/ActorsSlice/ActorsSlice";

export const store = () =>
  configureStore({
    reducer: {
      actors:actorsSlice
  }});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>