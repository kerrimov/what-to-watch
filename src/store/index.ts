import { configureStore } from "@reduxjs/toolkit";
import cardContainerSlice from "../components/CardContainer/reducers/cardContainerReducer";

export const store = configureStore({
    reducer: {
        cardsSlice: cardContainerSlice
    }
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>