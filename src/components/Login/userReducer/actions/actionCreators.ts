import {
  userAccount,
  UserActionTypes,
  UserLoginAction,
  UserLoginErrorAction,
  UserLogoutAction,
  UserRequestAction,
} from "../../types/user";

export const logoutAction = ():UserLogoutAction => ({ type: UserActionTypes.USER_LOGOUT });
export const loginAction = (account: userAccount): UserLoginAction => ({
  type: UserActionTypes.USER_LOGIN,
  payload: { account },
});
export const userRequestAction = (): UserRequestAction => ({ type: UserActionTypes.USER_REQUEST });
export const loginErrorAction = (): UserLoginErrorAction => ({
  type: UserActionTypes.USER_LOGIN_ERROR,
});
