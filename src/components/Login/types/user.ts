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
    avatar_path: string | null;
  };
}

export interface userAccount {
  avatar: userAccountAvatar | string;
  id: number | string;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export enum UserActionTypes {
  USER_REQUEST = "USER_REQUEST",
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
  USER_LOGIN_ERROR = "USER_LOGIN_ERROR",
}

export interface UserRequestAction {
  type: UserActionTypes.USER_REQUEST;
}
export interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN;
  payload: { account: userAccount };
}
export interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT;
}
export interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR;
}

export type UserActions =
  | UserRequestAction
  | UserLoginAction
  | UserLogoutAction
  | UserLoginErrorAction;
