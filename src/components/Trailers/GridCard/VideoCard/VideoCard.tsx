import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Modal } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useDispatch } from "react-redux";
import { Endpoints } from "../../api/constants/endpoints";
import { changeBackground } from "../../api/actions/actionCreators";

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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleTrailerModal = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  const changeBackgroundTrailersSection = () => {
    dispatch(changeBackground(img));
  };

  const trailerUrl = `${Endpoints.TRAILER_PATH}${trailerKey}${Endpoints.TRAILER_QUERY_PARAM}`;

  return (
    <>
      <Card onClick={toggleTrailerModal} onMouseOver={changeBackgroundTrailersSection} sx={styleTreilerCard} >
        <PlayCircleOutlineIcon sx={styleIconPlay} />
        <CardMedia
          component='img'
          image={img}
          alt={filmName}
        />
      </Card>
      <Modal
        open={isOpen}
        onClose={toggleTrailerModal}
      >
        <Box sx={styleIframeBox}>
          <iframe title="iframe" width="1467" height="824" frameBorder="0"
            src={trailerUrl}
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