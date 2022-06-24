import React from "react";

import { Grid, Link } from "@mui/material";

export const LoginSupport: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          Dont have an account? Sign Up
        </Link>
      </Grid>
    </Grid>
  );
};
