import { combineReducers } from "redux";
import { userReducer } from "../components/Login/userReducer/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
