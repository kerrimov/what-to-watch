import React from "react";
import logo from "./logo.svg";
import { Social } from "./Social";
import { Copyright } from "./Copyright";
import { Container, Grid, Box, Typography, Link, Avatar } from "@mui/material";

const style = {
  wrapper: {
    backgroundColor: "primary.main",
    height: "250px",
    paddingTop: "40px",
    position: "fixed",
    width: "100%",
    bottom: "0",
    right: "0"
  },
  avatar: {
    width: "150px",
    height: "150px",
  },
  info: {
    color: "text.secondary",
  }
};

const Footer = () => 
(
    <Box sx={style.wrapper}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs>
            <Avatar variant="square" src={logo} sx={style.avatar} />
          </Grid>
          <Grid
            item
            xs={4}
            marginRight={10}
          >
            <Social />
          </Grid>
          <Grid item lg>
             <Typography component="p" paragraph gutterBottom sx={style.info}>
              WTW invites you to choose a movie for the evening or make a wish
              list to watch. This entertainment site was created for
              educational purposes. The <Link href="https://developers.themoviedb.org/" color="inherit">API</Link>{" "}
              used is freely available. Millions of movies, TV shows and people to discover. Explore now.
              </Typography>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
);

export default Footer;