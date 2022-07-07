import { trailerReducer } from "../components/Trailers/reducers/trailersReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    trailerReducer: trailerReducer
});