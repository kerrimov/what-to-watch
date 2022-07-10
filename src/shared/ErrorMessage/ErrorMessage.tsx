import React from "react";
import { Alert, AlertTitle, Box } from "@mui/material";
import { SerializedError } from "@reduxjs/toolkit";

interface ErrorMessageProps {
    error: SerializedError
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => (
    <Box justifyContent="center" align-items="center" sx={{ display: "flex", mt: 15 }}>
        <Alert severity="error" sx={{ display: "flex", width: 300 }} >
            <AlertTitle>
                Error
            </AlertTitle>
            {error.message}
        </Alert>
    </Box>
);