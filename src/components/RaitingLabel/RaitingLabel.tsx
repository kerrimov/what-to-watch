import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  value: number;
}

export const CircularProgressWithLabel = ({ value }: Props) => (
  <Box sx={{
    position: "relative",
    display: "inline-flex",
    backgroundColor: "black",
    borderRadius: "50%"
  }}
  >
    <CircularProgress variant="determinate" {...{ value }} />
    <Box sx={styles}>
      <Typography
        variant="caption"
        component="div"
        color="white"
      >
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);