export interface UserState {
  isFetching: boolean;
  isLoggedIn: boolean;
  error: boolean;
  account: userAccount;
}

interface userAccountAvatar {
  gravatar: {
    hash: string;
  };
  tmdb: {
    avatar_path: string;
  };
}

export interface userAccount {
  avatar: userAccountAvatar;
  id: number;
  name: string;
  include_adult: boolean;
  username: string;
}

export enum UserActionTypes {
  TOKEN_REQUEST = "USER_TOKEN_REQUEST",
  TOKEN_REQUEST_SUCCESS = "USER_TOKEN_REQUEST_SUCCESS",
  TOKEN_REQUEST_FAILURE = "USER_TOKEN_REQUEST_FAILURE",
  USER_REQUEST = "USER_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR = "USER_LOGIN_ERROR",
  USER_LOGOUT = "USER_LOGOUT",
}

export interface TokenRquestAction {
  type: UserActionTypes.TOKEN_REQUEST;
}
export interface TokenRequestSuccessAction {
  type: UserActionTypes.TOKEN_REQUEST_SUCCESS;
}
export interface TokenRequestFailureAction {
  type: UserActionTypes.TOKEN_REQUEST_FAILURE;
}
export interface UserRequestAction {
  type: UserActionTypes.USER_REQUEST;
}
export interface UserLoginSuccessAction {
  type: UserActionTypes.USER_LOGIN_SUCCESS;
  payload: { account: userAccount };
}
export interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT;
}
export interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR;
}

export type UserActions =
  | TokenRquestAction
  | TokenRequestSuccessAction
  | TokenRequestFailureAction
  | UserRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserLogoutAction;
