import { configureStore } from "@reduxjs/toolkit";
import { treilerReducer } from "../components/Trailers/reducers/trailersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    treilerReducer: treilerReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>