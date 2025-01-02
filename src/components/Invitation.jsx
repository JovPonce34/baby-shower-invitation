import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    backgroundColor: '#FFF8E1',
    border: '2px solid #FFC107',
    borderRadius: '15px',
}));

function Invitation() {
    return (
        <StyledPaper elevation={3}>
            <Typography variant="h5" color="secondary" gutterBottom>
            Con mucha alegría te invitamos al Baby Shower de
            </Typography>
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', my: 2 }}>
            [Nombre del Bebé]
            </Typography>
            <Typography variant="body1" paragraph>
            Acompáñanos en este día tan especial donde celebraremos la próxima llegada de nuestro pequeño aventurero.
            </Typography>
            <Box sx={{ my: 3 }}>
            <Typography variant="h6">Fecha: [Fecha del evento]</Typography>
            <Typography variant="h6">Hora: [Hora del evento]</Typography>
            </Box>
        </StyledPaper>
    );
}

export default Invitation;