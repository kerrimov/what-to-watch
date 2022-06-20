import axios from "axios";

const API = "https://api.themoviedb.org/3";

const API_KEY = process.env.REACT_APP_API_KEY;

export const api = axios.create({
  baseURL: API,
  params: {
    api_key: API_KEY,
  },
});