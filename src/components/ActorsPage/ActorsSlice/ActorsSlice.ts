import { createSlice } from "@reduxjs/toolkit";
import { ActorsState } from "../types/actor";

const initialState:ActorsState = {
    actors: []
}

export const actorsSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      run(state) {
        state.actors.push(1);
      },
     
      
    },
    extraReducers:{
        
    },
  });

  export const actorsActions = actorsSlice.actions
  
  export default actorsSlice.reducer;