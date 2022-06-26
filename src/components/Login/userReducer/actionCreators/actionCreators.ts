import {
  userAccount,
  UserActionTypes,
  UserLoginAction,
  UserLoginErrorAction,
  UserLogoutAction,
  UserRequestAction,
  UserRequestFailureAction,
  UserRequestSuccessAction,
} from "../../types/user";

export const logoutAction = (): UserLogoutAction => ({ type: UserActionTypes.USER_LOGOUT });
export const loginAction = (account: userAccount): UserLoginAction => ({
  type: UserActionTypes.USER_LOGIN_SUCCESS,
  payload: { account },
});
export const userRequestAction = (): UserRequestAction => ({ type: UserActionTypes.USER_REQUEST });
export const userRequestSuccessAction = (): UserRequestSuccessAction => ({
  type: UserActionTypes.USER_REQUEST_SUCCESS,
});
export const userRequestFailureAction = (): UserRequestFailureAction => ({
  type: UserActionTypes.USER_REQUEST_FAILURE,
});

export const loginErrorAction = (): UserLoginErrorAction => ({
  type: UserActionTypes.USER_LOGIN_ERROR,
});
