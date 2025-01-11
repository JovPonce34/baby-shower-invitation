import { Paper, Typography, Box } from '@mui/material';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/bee.png';

const LocationPaper = styled(Paper)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    border: '2px solid #FFC107',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 248, 225, .9)',
    backgroundBlendMode: 'color',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '120%',
    
}));

function Actividades() {
    return (
        <LocationPaper>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 , mt: 2}}>
                <BallotOutlinedIcon color="secondary" sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h5" color="primary">
                    Programa del Evento
                </Typography>
            </Box>
            <Box sx={{p:2}}>
                <Box sx={{my:1, fontSize: '20px' }} className='lora'>4:00 PM - Recepción y bienvenida</Box>
                <Box sx={{my:1, fontSize: '20px'}} className='lora'>4:30 PM - Actividades Baby Shower</Box>
                <Box sx={{my:1, fontSize: '20px'}} className='lora'>7:00 PM - Cena</Box>
                <Box sx={{my:1, fontSize: '20px'}} className='lora'>9:00 PM - Baile</Box>
            </Box>
            
        </LocationPaper>
    );
}

export default Actividades;