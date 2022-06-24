import { UserActions, UserActionTypes, UserState } from "../types/user";

const initialState: UserState = {
  isFetching: false,
  isLoggedIn: false,
  error: false,
  account: {
    avatar: "No avatar",
    id: "no id",
    iso_639_1: "",
    iso_3166_1: "",
    name: "",
    include_adult: false,
    username: "",
  },
};

export const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        account: { ...state.account, ...action.payload.account},
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
