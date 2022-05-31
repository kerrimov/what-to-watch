
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//import IconPlay from "../IconPlay/IconPlay";
//import '../../main.css'

interface Props {
  filmName: string
  fullName: string
  img: string
  alt: string
};


function VideoCard({ filmName, fullName, img, alt }: Props) {
  return (
    <>
      <Card sx={{ maxWidth: 300, borderRadius: 3 }} >
        <CardMedia
          component='img'
          height="168"
          image={img}
          alt={alt}
        />
        {/* <IconPlay/> */}
      </Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          {filmName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {fullName}
        </Typography>
      </CardContent>
    </>
  );
}

export default VideoCard;