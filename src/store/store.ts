import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "../components/Login/userReducer/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;