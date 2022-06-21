import { userAccount, UserAction, UserActionTypes, UserState } from "./types/user";

const initialState: UserState = {
  isFetching: false,
  isLoggedIn: false,
  error: false,
  account: {
    avatar: null,
    id: null,
    iso_639_1: "",
    iso_3166_1: "",
    name: "",
    include_adult: false,
    username: "",
  },
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        account: { ...state.account, ...action.payload },
      };
    case UserActionTypes.USER_LOGOUT:
      return { ...state, ...initialState };
    case UserActionTypes.USER_REQUEST:
      return { ...state, isFetching: true };
    case UserActionTypes.USER_LOGIN_ERROR:
      return { ...state, error: true, isFetching: false };
    default:
      return state;
  }
};

export const logoutAction = () => ({ type: UserActionTypes.USER_LOGOUT });
export const loginAction = (account: userAccount) => ({
  type: UserActionTypes.USER_LOGIN,
  payload: account,
});
export const userRequestAction = () => ({ type: UserActionTypes.USER_REQUEST });
export const loginErrorAction = () => ({ type: UserActionTypes.USER_LOGIN_ERROR });
