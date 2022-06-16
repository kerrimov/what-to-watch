import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return { isLoggedIn: true };
    case UserActionTypes.USER_LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
};

export const logoutAction = () => ({ type: UserActionTypes.USER_LOGOUT });
export const loginAction = () => ({ type: UserActionTypes.USER_LOGIN_SUCCESS });
