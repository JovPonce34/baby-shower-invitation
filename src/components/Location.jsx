import { Paper, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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

function Location() {
    return (
        <LocationPaper>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 , mt: 2}}>
                <LocationOnIcon color="secondary" sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h5" color="primary">
                    Ubicación
                </Typography>
            </Box>
            <Typography variant="body1" align="center" paragraph>
                Francisco Javier Mina No. 1051 Tezoyuca Estado de México
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 , mt: 2}}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!4v1736305331850!6m8!1m7!1s8LycrBJ_DjC7olG_S-Kzbw!2m2!1d19.5921160093643!2d-98.91029109643195!3f298.4548304269731!4f-6.625438763151934!5f0.7820865974627469" 
                    width="auto" 
                    height="400px" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        </LocationPaper>
    );
}

export default Location;