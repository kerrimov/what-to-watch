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
  USER_REQUEST = "USER_REQUEST",
  USER_REQUEST_SUCCESS = "USER_REQUEST_SUCCESS",
  USER_REQUEST_FAILURE = "USER_REQUEST_FAILURE",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGOUT = "USER_LOGOUT",
  USER_LOGIN_ERROR = "USER_LOGIN_ERROR",
}

export interface UserRequestAction {
  type: UserActionTypes.USER_REQUEST;
}
export interface UserRequestSuccessAction {
  type: UserActionTypes.USER_REQUEST_SUCCESS;
}
export interface UserRequestFailureAction {
  type: UserActionTypes.USER_REQUEST_FAILURE;
}
export interface UserLoginAction {
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
  | UserRequestAction
  | UserLoginAction
  | UserLogoutAction
  | UserLoginErrorAction
  | UserRequestSuccessAction
  | UserRequestFailureAction;
