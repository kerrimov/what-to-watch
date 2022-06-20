import { combineReducers } from "redux";
import { userReducer } from "../../components/Login/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
