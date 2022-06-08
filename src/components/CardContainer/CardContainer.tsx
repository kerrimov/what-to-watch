import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FilmCard from '../FilmCard/FilmCard';

export default function BasicGrid() {

  let items = []
  for (let i = 0; i < 7; i++) {
    items.push(
      <Grid item xs={1.7} key={i}>
        <FilmCard />
      </Grid>
    )
  }

  return (
    <Box sx={{ mx: "auto", mt: 10, maxWidth: 1300, flexGrow: 1 }}>
      <Grid justifyContent="space-around" container spacing={1}>
        {items}
      </Grid>
    </Box>
  );
}