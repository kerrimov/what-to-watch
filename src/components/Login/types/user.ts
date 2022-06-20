export interface UserState {
  isLoggedIn: boolean;
  account: any
}

export enum UserActionTypes {
  USER_REQUEST = "USER_REQUEST",
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
}

interface UserRequestAction {
  type: UserActionTypes.USER_REQUEST;
}
interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN;
  payload: { account: any };
}
interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT;
}

export type UserAction = UserRequestAction | UserLoginAction | UserLogoutAction;
