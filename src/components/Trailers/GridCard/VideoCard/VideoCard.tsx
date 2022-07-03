import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

interface Props {
  filmName: string
  img: string
};

export const VideoCard = ({ filmName, img }: Props) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1467,
    height: 824,
    bgcolor: "black",
    ":focus-visible": {
      outline: "none",
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card onClick={handleOpen} sx={{
        position: "relative",
        maxWidth: 300,
        borderRadius: 3,
        margin: "auto",
        transition: "transform 0.5s;",
        "&:hover": {
          transform: "scale(1.1)"
        }
      }} >
        <PlayCircleOutlineIcon sx={{position: "absolute", top: "37%", left: "42%", width: "3rem", height: "3rem", color: "white"}}/>
        <CardMedia
          component='img'
          image={img}
          alt={filmName}
        />
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <iframe title="iframe" width="1467" height="824" frameBorder="0"
            src="//www.youtube.com/embed/9MgxZ5KUBwo?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1"
          ></iframe>
        </Box>
      </Modal>
      <CardContent sx={{ textAlign: "center", p: "10px" }}>
        <Typography variant="h5" component="div" color="white">
          {filmName}
        </Typography>
      </CardContent>
    </>
  );
};