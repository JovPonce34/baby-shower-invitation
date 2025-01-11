import { Paper, Typography, Box } from '@mui/material';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/bee.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

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
            <List sx={{ width: '100%', maxWidth: 360, ml:1 }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="4:00 PM"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                🥂 Recepción y Bienvenida:
                            </Typography>
                        {" — Lleguen con sus mejores sonrisas y prepárense para la fiesta. ¡Habrá sorpresas desde el inicio!"}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="4:30 PM"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                🎲 Juegos y Diversión:
                            </Typography>
                        {" — Risas aseguradas con los juegos más locos y retos sorpresivos. ¡No querrás perderlos!"}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="7:00 PM"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                🍴 Hora de la Cena:
                            </Typography>
                        {" — Prepárate para disfrutar de una deliciosa comida con mucho amor y sazón."}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="9:00 PM"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                🕺 Baile y Fiesta:
                            </Typography>
                        {" — ¡Movamos el cuerpo y celebramos al ritmo de la música!"}
                        </>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
            
        </LocationPaper>
    );
}

export default Actividades;