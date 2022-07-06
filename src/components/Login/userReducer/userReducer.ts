import { UserActions, UserActionTypes, UserState } from "../types/user";

const initialState: UserState = {
  isFetching: false,
  isLoggedIn: false,
  error: false,
  account: {
    avatar: {
      gravatar: {
        hash: "",
      },
      tmdb: {
        avatar_path: "",
      },
    },
    id: 0,
    name: "",
    include_adult: false,
    username: "",
  },
};

export const userReducer = (state: UserState = initialState, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.TOKEN_REQUEST:
      return { ...state, isFetching: true };
    case UserActionTypes.TOKEN_REQUEST_SUCCESS:
      return { ...state, isFetching: false };
    case UserActionTypes.TOKEN_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case UserActionTypes.USER_REQUEST:
      return { ...state, isFetching: true };
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        account: { ...action.payload.account },
      };
    case UserActionTypes.USER_LOGIN_ERROR:
      return { ...state, error: true, isFetching: false, isLoggedIn: false };
    case UserActionTypes.USER_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
