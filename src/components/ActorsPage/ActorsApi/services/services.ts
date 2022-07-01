import { createAsyncThunk } from "@reduxjs/toolkit";
import { getActors } from "../ActorsApi";

export const fetchActors = createAsyncThunk("actors/fetchAll", async (_, thunkAPI) => {
  try {
    const actors = await getActors();
    return actors.results;
  } catch (e) {
    return thunkAPI.rejectWithValue("Error");
  }
});
