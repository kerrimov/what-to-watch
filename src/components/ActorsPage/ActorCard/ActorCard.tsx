import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


export const ActorCard:React.FC = () =>(
    <Card sx={{ maxWidth: 250 }} >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        //  image={img}
        //  alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)