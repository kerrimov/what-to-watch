import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Avatar, Typography, Box, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { fetchSessionAndGetUser, fetchToken } from "./LoginApi/services/services";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginSupport } from "./LoginSupport/LoginSupport";
import { UserActions } from "./types/user";
import { UserKeys } from "./LoginApi/constants/UserKeys";

export const Login: React.FC = () => {
  const style = {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const dispatch = useDispatch<Dispatch<UserActions>>();

  const runFetchToken = () => {
    fetchToken()(dispatch);
  };

  useEffect(() => {
    const token = localStorage.getItem(UserKeys.TOKEN);
    if (token) {
      fetchSessionAndGetUser(token)(dispatch);
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={style}>
        <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <LoginForm handleClick={runFetchToken} />
        <LoginSupport />
      </Box>
    </Container>
  );
};
