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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.822698147725!2d-98.91272472603423!3d19.592095235570433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e92429252967%3A0x5941cf3cca3dc87e!2sCalle%20Francisco%20Javier%20Mina%201055%2C%20Tezoyuca%2C%2056006%20Tezoyuca%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!" 
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