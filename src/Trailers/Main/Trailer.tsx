
import React from 'react';
import GridCard from '../GridVideoCard/GridCard';
import { Container, Typography} from '@mui/material';

export const Trailer = () => {
    return (
        <Container maxWidth='xl'>
                <Typography variant="h2" color='black' mb={2}>Trailers</Typography>
            <GridCard/>
        </Container>
 )
};