export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES"

// const initialState: any = {
//   card: []
// };

// export const cardContainerReducer = (state = initialState, { type = GET_POPULAR_MOVIES, payload }) => {
//   switch (type) {
//     case GET_POPULAR_MOVIES:
//       return { ...state, card: payload.data }
//     default:
//       return state;
//   }
// }

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPopularMovies = createAsyncThunk(
  "cards",
  async function() {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=746ddaff6c6c35161177d073645fcc5d&language=en-US&page=1");
    const data = await response.json();
    return data.results;
  }
);

const cardContainerSlice: any = createSlice({
  name: "cards",
  initialState: {
    cards: [{"id": 1}],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPopularMovies.pending ]: (state: { status: string; }) => {
      state.status = "loading";
    },
    [fetchPopularMovies.fulfilled]: (state: { status: string; cards: any; }, action: { payload: any; }) => {
      state.status = "resolved";
      state.cards = action.payload;
    },
  },
})

export default cardContainerSlice.reducer;

//export const { fetchPopularMovies } = cardContainerSlice.actions;