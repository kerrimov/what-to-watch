export interface UserState {
  isLoggedIn: boolean;
}

export enum UserActionTypes {
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR = " USER_LOGIN_ERROR",
  USER_LOGOUT = "USER_LOGOUT",
}
interface UserLoginSuccessAction {
  type: UserActionTypes.USER_LOGIN_SUCCESS;
}
interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR;
}
interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT;
}

export type UserAction = UserLoginSuccessAction | UserLoginErrorAction | UserLogoutAction;
