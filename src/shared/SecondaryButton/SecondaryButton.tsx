import React from "react";
import { Button } from "@mui/material";

interface Props {
  children: string;
  clickHandler?: () => void;
}

const style = {
  color: "secondary.contarstText",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    color: "primary.contrastText",
  }
};

export const SecondaryButton: React.FC<Props> = (props: Props) => (
  <Button variant="contained" color="secondary" className="button" sx={style} onClick={props.clickHandler}>
    {props.children}
  </Button>
);