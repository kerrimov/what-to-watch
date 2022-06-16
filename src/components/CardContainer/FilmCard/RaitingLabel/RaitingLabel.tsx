import * as React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

const styles = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

interface Props {
  filmRating: number;
}

export const RatingLabel = ({ filmRating }: Props) => (
  <Box sx={{
    position: "relative",
    display: "inline-flex",
    backgroundColor: "black",
    borderRadius: "50%"
  }}
  >
    <CircularProgress variant="determinate" value={filmRating} />
    <Box sx={styles}>
      <Typography
        variant="caption"
        component="div"
        color="white"
      >
        {`${Math.round(filmRating)}%`}
      </Typography>
    </Box>
  </Box>
);