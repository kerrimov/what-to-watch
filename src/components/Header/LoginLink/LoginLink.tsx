import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Dispatch } from "redux";
import { UserActions } from "../../Login/types/user";
import { UserKeys } from "../../Login/LoginApi/constants/UserKeys";
import { logout } from "../../Login/LoginApi/services/services";

export const LoginLink = () => {
  const login = useSelector<RootState, boolean>((state) => state.user.isLoggedIn);
  const dispatch = useDispatch<Dispatch<UserActions>>();
  const sessionId = localStorage.getItem(UserKeys.SESSION_ID);

  const logoutClick = () => {
    if (sessionId) {
      logout(sessionId)(dispatch);
    }
  };

  return (
    <Box>
      {login ? (
        <Button onClick={logoutClick}>Log out</Button>
      ) : (
        <Button component={Link} to="/login">
          Log in
        </Button>
      )}
    </Box>
  );
};
