import React, { useEffect } from "react";
import { Avatar, Typography, Box, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createSession, getAccount, requestToken } from "./LoginApi/userAuth";
import { loginAction, loginErrorAction, userRequestAction } from "./userReducer";
import { useDispatch } from "react-redux";
import { LoginForm, LoginSupport } from "./LoginParts";

const Login: React.FunctionComponent = () => {
  const style = {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const dispatch = useDispatch();
  const fetchToken = async () => {
    try {
      const token = await requestToken();
      const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/`;
      window.open(redirectUrl, "_self", "noreferrer");
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };

  const fetchSessionAndGetUser = async (token: string) => {
    try {
      const sessionId = await createSession(token);
      localStorage.setItem("session_id", sessionId);
      const account = await getAccount(sessionId);
      dispatch(loginAction(account));
    } catch (error) {
      dispatch(loginErrorAction());
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("request_token");
    if (token) {
      dispatch(userRequestAction());
      fetchSessionAndGetUser(token);
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={style}>
        <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <LoginForm handleClick={fetchToken} />
        <LoginSupport />
      </Box>
    </Container>
  );
};

export default Login;
