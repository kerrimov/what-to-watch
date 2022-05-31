/* eslint-disable array-callback-return */
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VideoCard from '../shared/VideoCard/VideoCard';
//import '../main.css';
import filmData from '../filmData'

 const GridCard: React.FC = () => {
   const gridBox = filmData.map(({ title, filmName, fullName, img, src, alt }): any => {
     return (
       <Grid container spacing={2} >
          <Grid item xs>
            {/* <iframe width="560" height="315" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='hidden'></iframe> */}
            <VideoCard filmName={filmName} fullName={fullName} img={img} alt={alt} />
          </Grid>
        </Grid>
      )
    })
   return (<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}> {gridBox}</Box>
    
  );
}

export default GridCard;