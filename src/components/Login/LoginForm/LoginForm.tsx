import { Box, TextField, Button } from "@mui/material";
import React from "react";

interface LoginFormProps {
  handleClick: () => Promise<void>
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleClick }) => {
  return (
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <Button
        onClick={() => handleClick()}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default LoginForm;
