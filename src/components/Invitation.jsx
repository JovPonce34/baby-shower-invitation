import { Paper, Box } from '@mui/material';
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
            
            <h1 className='dancing-script-encabezado'>
                Un nuevo rayito de sol llega a nuestras vidas...
            </h1>
            
            <h1 className='allura-regular'>
            Liam Mateo
            </h1>
            <h2 className='great-vibes-regular'>
                Con mucha emoción, les invitamos a celebrar la llegada de nuestro pequeño tesoro.
            </h2>
            <h3 className='lora'>
                El amor está por nacer y queremos compartirlo con ustedes. Acompáñanos a celebrar este maravilloso momento en el que la vida se llena de nuevas ilusiones y sonrisas.
            </h3>
            
            <Box  sx={{ my: 3 }}>
            <h2 className='raleway'>Fecha: 15 de Febreo 2025</h2>
            <h2 className='raleway'>Hora: 4:00 PM</h2>
            </Box>
            <h3 className='nunito'>
                Tu presencia será el mejor regalo para nosotros y para el bebé. ¡Esperamos verte y compartir juntos este día tan especial!
            </h3>
            
        </StyledPaper>
    );
}

export default Invitation;