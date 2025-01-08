import { useState } from 'react';
import { Paper, Box, Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/bee.png';
import Location from './Location';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    
    border: '1px solid #FFC107',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 248, 225, .9)',
    backgroundBlendMode: 'color',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '120%',
    backgroundPosition: 'center',
}));

function Invitation() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <StyledPaper elevation={1}>
            
            <Box sx={{my:1}} className='lora'>
                Con mucha emoción, les invitamos a celebrar la llegada de nuestro pequeño tesoro.
            </Box>

            <Box sx={{my:1}} className='allura-regular'>
                Liam Mateo
            </Box>
            
            <Box sx={{my:1}} className='lora'>
                El amor está por nacer y queremos compartirlo con ustedes. Acompáñanos a celebrar este maravilloso momento en el que la vida se llena de nuevas ilusiones y sonrisas.
            </Box>
            
            <Box sx={{my:1}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <div className='raleway' style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>Febreo</div>
                    <div className='allura-regular' style={{ fontSize: '55px' }}>15</div>
                    <div className='raleway' style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>4:00 PM</div>
                </Box>
            </Box>
            <Box sx={{my:1}} className='nunito'>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{textTransform: 'none'}}
                    onClick={handleOpen}
                >
                    Ver ubicación
                </Button>
            </Box>
            <Box sx={{my:3}} className='lora'>
                Tu presencia será el mejor regalo para nosotros y para el bebé. ¡Esperamos verte y compartir juntos este día tan especial!
            </Box>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-ubicacion"
                aria-describedby="modal-descripcion-ubicacion"
            >
                
                    <Location />
             
            </Modal>
            
        </StyledPaper>
    );
}

export default Invitation;