import React from "react";
import { Alert, AlertTitle, Box } from "@mui/material";

export const ErrorMessage = () => {
    return (
        <Box justifyContent="center" sx={{ display: "flex" }}>
            <Alert severity="error" sx={{ display: "flex", width: 300 }} >
                <AlertTitle>
                    Error
                </AlertTitle>
                Oops something went wrong...
            </Alert>
        </Box>
    );
};