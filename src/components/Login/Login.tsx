import React, { useEffect } from "react";
import { Avatar, Typography, Box, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createSession, getAccount, requestToken } from "../../apis/userAuth";
import { loginAction } from "./userReducer";
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
    const token = await requestToken();
    const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/`;
    window.open(redirectUrl, "_self", "noreferrer");
  };

  const fetchSessionAndGetUser = async (token:string) => {
    const sessionId = await createSession(token);
    localStorage.setItem("session_id", sessionId);
    const account = await getAccount(sessionId);
    dispatch(loginAction(account));
  };

  useEffect(() => {
    const token = localStorage.getItem("request_token");
    if (token) {
      fetchSessionAndGetUser(token);
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
        <LoginForm handleClick={fetchToken} />
        <LoginSupport />
      </Box>
    </Container>
  );
};

export default Login;
