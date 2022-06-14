import * as React from "react";
import Grid from "@mui/material/Grid";
import FilmCard from "../components/FilmCard/FilmCard";

const cardTemplates: Array<React.ReactElement> = [];
for (let i = 0; i < 7; i++) {
    cardTemplates.push(
        <Grid item xs={6} sm={4} md={3} lg={1.7} key={i}>
            <FilmCard />
        </Grid>
    ); 
}

export default cardTemplates;