import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const DownloadProgress = () => {
    return (
        <Box justifyContent="center" sx={{ display: "flex" }}>
            <CircularProgress size="5rem" />
        </Box>
    );
};

export default DownloadProgress;