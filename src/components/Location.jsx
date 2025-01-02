import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';

const LocationPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    backgroundColor: '#FFF8E1',
    border: '2px solid #FFC107',
    borderRadius: '15px',
}));

function Location() {
    return (
        <LocationPaper elevation={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <LocationOnIcon color="secondary" sx={{ fontSize: 40, mr: 1 }} />
            <Typography variant="h5" color="primary">
                Ubicación
            </Typography>
            </Box>
            <Typography variant="body1" align="center" paragraph>
            [Dirección completa del evento]
            </Typography>
            {/* Aquí puedes agregar un componente de mapa si lo deseas */}
        </LocationPaper>
    );
}

export default Location;