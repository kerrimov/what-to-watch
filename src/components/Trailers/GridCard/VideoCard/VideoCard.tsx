import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useDispatch } from "react-redux";
import { Endpoints } from "../../api/constants/endpoints";
import { TrailersActions } from "../../types/TrailersTypes";

interface Props {
  filmName: string
  img: string
  trailerKey: string
};

export const VideoCard = ({ filmName, img, trailerKey }: Props) => {

  const styleIframeBox = {
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

  const styleTreilerCard = {
    position: "relative",
    maxWidth: 300,
    borderRadius: 3,
    margin: "auto",
    transition: "transform 0.5s;",
    "&:hover": {
      transform: "scale(1.1)"
    }
  };

  const styleIconPlay = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "3rem",
    height: "3rem",
    color: "white"
  };

  const [open, setOpen] = React.useState(false);

  const handleOpenClose = () => {
    setOpen(prevState => !prevState);
  };

  const dispatch = useDispatch();

  const changeBackground = () => {
    dispatch({ type: TrailersActions.CHANGE_BACKGROUND, payload: img });
  };

  const treilerUrl = `${Endpoints.TRAILER_PATH}${trailerKey}${Endpoints.TRAILER_QUERY_PARAM}`;

  return (
    <>
      <Card onClick={handleOpenClose} onMouseOver={changeBackground} sx={styleTreilerCard} >
        <PlayCircleOutlineIcon sx={styleIconPlay} />
        <CardMedia
          component='img'
          image={img}
          alt={filmName}
        />
      </Card>
      <Modal
        open={open}
        onClose={handleOpenClose}
      >
        <Box sx={styleIframeBox}>
          <iframe title="iframe" width="1467" height="824" frameBorder="0"
            src={treilerUrl}
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