import * as React from "react";
import { CardActions, Link, Typography } from "@mui/material";

const CardInfoSection = () => {
    return (
        <CardActions sx={{ minHeight: 10, pt: 0, pb: 0 }}>
            <Link
                href="#"
                underline="none"
                color="text.primary"
                sx={{
                    "&:hover": {
                        color: "primary.main"
                    }
                }}>
                <Typography component="h3" sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    {"American siege"}
                </Typography>
            </Link>
        </CardActions>
    );
};

export default CardInfoSection;