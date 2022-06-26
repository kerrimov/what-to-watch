import { Dispatch } from "redux";
import { createSession, getAccount, requestToken } from "../userAuth";
import { UserActions } from "../../types/user";
import {
  loginErrorAction,
  loginAction,
  userRequestFailureAction,
  userRequestSuccessAction,
  userRequestAction,
} from "../../userReducer/actionCreators/actionCreators";

export const fetchToken = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(userRequestAction());
      const token = await requestToken();
      dispatch(userRequestSuccessAction());
      const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECT_PATH}`;
      window.open(redirectUrl, "_self", "noreferrer");
    } catch (error) {
      dispatch(userRequestFailureAction());
    }
  };
};

export const fetchSessionAndGetUser = (token: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(userRequestAction());
      const sessionId = await createSession(token);
      const account = await getAccount(sessionId);
      dispatch(loginAction(account));
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };
};
