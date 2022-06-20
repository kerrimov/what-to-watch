import { UserAction, UserActionTypes, UserState } from "./types/user";

const initialState: UserState = {
  isLoggedIn: false,
  account: {},
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        account: { ...action.payload },
      };
    case UserActionTypes.USER_LOGOUT:
      return { ...state, isLoggedIn: false, account: {} };
    default:
      return state;
  }
};

export const logoutAction = () => ({ type: UserActionTypes.USER_LOGOUT });
export const loginAction = (account:string) => ({
  type: UserActionTypes.USER_LOGIN,
  payload: account,
});
