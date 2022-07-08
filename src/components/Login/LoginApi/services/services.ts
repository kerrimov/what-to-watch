import { Dispatch } from "redux";
import { createSession, deleteSession, getAccount, requestToken } from "../userAuth";
import { UserActions } from "../../types/user";
import {
  userRequestAction,
  loginErrorAction,
  loginSuccessAction,
  tokenRequestAction,
  tokenRequestFailureAction,
  tokenRequestSuccessAction,
  logoutAction,
} from "../../actionCreators/actionCreators";

export const fetchToken = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(tokenRequestAction());
      const token = await requestToken();
      dispatch(tokenRequestSuccessAction());
      const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECT_PATH}`;
      window.open(redirectUrl, "_self", "noreferrer");
    } catch (error) {
      dispatch(tokenRequestFailureAction());
    }
  };
};

export const fetchSessionAndGetUser = (token: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch(userRequestAction());
      const sessionId = await createSession(token);
      const account = await getAccount(sessionId);
      dispatch(loginSuccessAction(account));
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };
};

export const logout = (sesionId:string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    deleteSession(sesionId);
    dispatch(logoutAction());
  };
};
