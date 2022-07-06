import { configureStore } from "@reduxjs/toolkit";
import { trailerReducer } from "../components/Trailers/reducers/trailersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    trailerReducer: trailerReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>