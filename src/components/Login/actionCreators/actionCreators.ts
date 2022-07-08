import {
  TokenRquestAction,
  userAccount,
  UserActionTypes,
  UserLoginSuccessAction,
  UserLoginErrorAction,
  UserLogoutAction,
  UserRequestAction,
  TokenRequestFailureAction,
  TokenRequestSuccessAction,
} from "../types/user";

export const userRequestAction = (): UserRequestAction => ({ type: UserActionTypes.USER_REQUEST });
export const loginSuccessAction = (account: userAccount): UserLoginSuccessAction => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: { account },
});
export const loginErrorAction = (): UserLoginErrorAction => ({
  type: UserActionTypes.USER_LOGIN_ERROR,
});
export const logoutAction = (): UserLogoutAction => ({ type: UserActionTypes.USER_LOGOUT });

export const tokenRequestAction = (): TokenRquestAction => ({
  type: UserActionTypes.TOKEN_REQUEST,
});
export const tokenRequestSuccessAction = (): TokenRequestSuccessAction => ({
  type: UserActionTypes.TOKEN_REQUEST_SUCCESS,
});
export const tokenRequestFailureAction = (): TokenRequestFailureAction => ({
  type: UserActionTypes.TOKEN_REQUEST_FAILURE,
});
