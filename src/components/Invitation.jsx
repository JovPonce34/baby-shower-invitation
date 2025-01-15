import { motion } from 'framer-motion';
import { useState } from 'react';
import { Paper, Box, Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
//import backgroundImage from '../assets/bee.png';
import Location from './Location';
import Actividades from './Actividades';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    
    border: '1px solid #FFC107',
    borderRadius: '15px',
    backgroundColor: 'rgba(255, 248, 225, .7)',
    //backgroundBlendMode: 'lighten',
    //backgroundImage: `url(${backgroundImage})`,
    //backgroundSize: '120%',
    //backgroundPosition: 'center',
}));

// Definimos las variantes de animación
const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 1,
            ease: "easeOut",
            delay: 8.0
        }
    }
};

const nameVariants = {
    initial: { 
        opacity: 1, 
        scale: 1 
    },
    animate: { 
        opacity: 1, 
        scale: [1, 1.1, 1],
        rotate: [0, 2, -2, 0],
        transition: { 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1],
            ease: "easeInOut",
            scale: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            },
            rotate: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }
        }
    }
};

const dateVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
            duration: 1,
            type: "spring",
            stiffness: 120,
            delay: 8.6
        }
    }
};

function Invitation() {
    const [openModal, setOpenModal] = useState(false);
    const [openModalActividades, setOpenModalActividades] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const handleOpenActividades = () => setOpenModalActividades(true);
    const handleCloseActividades = () => setOpenModalActividades(false);

    return (
        <StyledPaper elevation={1}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <Box sx={{my:1, fontSize: '20px'}} className='lora'>
                    Con mucha emoción, los invitamos a celebrar la llegada de nuestro pequeño tesoro.
                </Box>
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={nameVariants}
            >
                <Box sx={{my:1}} className='allura-regular'>
                    Liam Mateo
                </Box>
            </motion.div>
            
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.3 }}
            >
                <Box sx={{my:1, fontSize: '20px'}} className='lora'>
                    Acompáñanos a celebrar este maravilloso momento en el que la vida se llena de nuevas ilusiones y sonrisas.
                </Box>
            </motion.div>
            
            <motion.div
                initial="hidden"
                animate="visible"
                variants={dateVariants}
            >
                <Box sx={{my:1}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                        <div className='raleway' style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>Febrero</div>
                        <div className='allura-regular' style={{ fontSize: '55px' }}>15</div>
                        <div className='raleway' style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>4:00 PM</div>
                    </Box>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.3 }}
            >
                <Box sx={{my:1}} className='nunito'>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{textTransform: 'none'}}
                        onClick={handleOpen}
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Ver ubicación
                    </Button>
                </Box>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 4.1 }}
            >
                <Box sx={{my:3, fontSize: '20px'}} className='lora'>
                    Tu presencia será el mejor regalo para nosotros. ¡Esperamos verte y compartir juntos este día tan especial!
                </Box>
            </motion.div>

            <Box sx={{my:1}} className='nunito'>
                <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{textTransform: 'none'}}
                    onClick={handleOpenActividades}
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Horarios y Actividades
                </Button>
            </Box>
            <Modal
                open={openModalActividades}
                onClose={handleCloseActividades}
                aria-labelledby="modal-ubicacion"
                aria-describedby="modal-descripcion-ubicacion"
            >
                <Actividades />
            </Modal>
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