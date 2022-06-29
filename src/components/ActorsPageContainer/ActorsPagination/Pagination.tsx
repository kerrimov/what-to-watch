import * as React from "react";
import { Box, Button } from "@mui/material";

const styles = {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0 30px 0",
};

export const Pagination = ({currentPage,setCurrentPage}: any) => {
    
    const prevHandler = () => {
            setCurrentPage((prev: number) => prev + 1);
        };
    const nextHandler = () => {
            setCurrentPage((prev: number) => prev - 1);
        };
    return (
        <Box sx={styles}>
            <Button disabled={currentPage <= 1} onClick={()=>nextHandler()}>{"<"}</Button>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((el, index)=>{
                        return <Button 
                        key={index}
                        sx={{fontWeight: currentPage===el ? "900" : "500"}}
                        onClick = {()=> setCurrentPage(el)}
                         >{el}</Button>;
                    })
                }
            <Button disabled={currentPage >= 10} onClick={()=>prevHandler()}>{">"}</Button>
        </Box>
    );
};