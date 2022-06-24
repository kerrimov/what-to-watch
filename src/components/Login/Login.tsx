import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSessionAndGetUser, fetchToken } from "./userReducer/actions/asyncAction";
import { userRequestAction } from "./userReducer/actions/actionCreators";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginSupport } from "./LoginSupport/LoginSupport";
import { Avatar, Typography, Box, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThunkAction } from "redux-thunk";

const Login: React.FunctionComponent = () => {
  const style = {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("request_token");
    if (token) {
      dispatch(userRequestAction());
      dispatch<any>(fetchSessionAndGetUser(token));
    }
  },[]);

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={style}>
        <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <LoginForm handleClick={dispatch<any>(fetchToken)} />
        <LoginSupport />
      </Box>
    </Container>
  );
};

export default Login;
