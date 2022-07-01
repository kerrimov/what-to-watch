import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { actorsSlice } from "../components/ActorsPage/ActorsSlice/ActorsSlice";

const rootReducer = combineReducers({ actors: actorsSlice.reducer });

export const store =
  configureStore({
    reducer: rootReducer,
  });

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>;


