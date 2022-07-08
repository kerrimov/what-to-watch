import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
const API_SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie";

const input = document.getElementById("searchInput") as HTMLInputElement | null;

export const searchMovie = () => {
  if (input != null) {
    const apiResponse = axios
      .get(`${API_SEARCH_MOVIE}?api_key=${API_KEY}&query=${input.value}`)
      .then((response) => response.data.results);
    console.log(apiResponse);
    return apiResponse;
  }
};
