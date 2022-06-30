import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const DownloadProgress = () => {
    return (
        <Box justifyContent="center" align-items="center" sx={{ display: "flex", mt: 15 }}>
            <CircularProgress size="5rem" />
        </Box>
    );
};

export default DownloadProgress;