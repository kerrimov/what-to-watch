import * as React from "react";
import { CardActions, Link, Typography } from "@mui/material";

const styles = {
    "&:hover": {
        color: "primary.main"
    }
};

interface Props {
    name: string;
    date: string;
}

export const CardInfoSection = ({ name, date }: Props) => (
    <CardActions sx={{ minHeight: 10, pt: 0, pb: 0, mt: 31 }}>
        <Link
            href="#"
            underline="none"
            color="text.primary"
            sx={styles}>
            <Typography component="h3" sx={{ fontWeight: 700 }}>
                {name}
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: "0.9rem", mr: 0.1, ml: 0.1 }}>
                {date}
            </Typography>
        </Link>
    </CardActions>
);