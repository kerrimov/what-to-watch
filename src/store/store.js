import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    actors: []
};

const actorsSlice = createSlice({
    name: "actorsSlice",
    initialState: initialState,
    reducers: {
        setActors(state, action) {
            state.actors = [...action.payload.actors];
        },
    },
});

export const store = configureStore({
    reducer: actorsSlice.reducer
});

export const actorsActions = actorsSlice.actions;