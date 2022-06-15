import * as React from "react";
import { CardActions, Link, Typography } from "@mui/material";

const styles = {
    "&:hover": {
        color: "primary.main"
    }
};

interface Props {
    name: string;
}

export const CardInfoSection = ({ name }: Props) => {
    return (
        <CardActions sx={{ minHeight: 10, pt: 0, pb: 0 }}>
            <Link
                href="#"
                underline="none"
                color="text.primary"
                sx={styles}>
                <Typography component="h3" sx={{ fontWeight: 700 }}>
                    {name}
                </Typography>
            </Link>
        </CardActions>
    );
};