import { Dispatch } from "redux";
import { createSession, getAccount, requestToken } from "../../LoginApi/userAuth";
import { UserActions } from "../../types/user";
import { loginErrorAction, loginAction } from "./actionCreators";

export const fetchToken = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const token = await requestToken();
      const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECT_PATH}`;
      window.open(redirectUrl, "_self", "noreferrer");
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };
};

export const fetchSessionAndGetUser = (token: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      const sessionId = await createSession(token);
      const account = await getAccount(sessionId);
      dispatch(loginAction(account));
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };
};
