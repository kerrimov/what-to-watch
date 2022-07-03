
import React from "react";
import { Box, Typography } from "@mui/material";
import GridCard from "./GridCard/GridCard";
import { cardData } from "../../mocks/cardData";

export const Trailers = () => {
    return (
        <Box sx={{ mx: "auto", mt: 10, maxWidth: 1300, flexGrow: 1, backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cardData[0]["backdrop_path"]})`, backgroundSize: "cover", backgroundPosition: "center", pr: 2, pl:2 }}>
            <Typography variant="h3" color="white" mb={2} sx={{p: 1}}>Trailers</Typography>
            <GridCard />
        </Box>
    );
};