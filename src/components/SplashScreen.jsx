import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/fondo.png';
import { ReactTyped } from "react-typed";

const bounceIn = keyframes`
 0% {
   opacity: 0;
   transform: scale(0.3);
 }
 50% {
   opacity: 0.9;
   transform: scale(1.1);
 }
 80% {
   opacity: 1;
   transform: scale(0.9);
 }
 100% {
   opacity: 1;
   transform: scale(1);
 }
;`


const fadeOut = keyframes`
 from {
   opacity: 1;
   transform: translateY(0);
 }
 to {
   opacity: 0;
   transform: translateY(-20px);
 }
; `

const SplashContainer = styled(Box)(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: `${fadeOut} 2s ease-in-out forwards`,
    animationDelay: '8s',
}));

const NameText = styled(Typography)(() => ({
    color: '#fde507',
    fontSize: '8rem',
    textAlign: 'center',
    fontFamily: 'SolidDice',
    textShadow: '1px 1px 4px rgb(0, 0, 0)',
    animation: `${bounceIn} 3s ease-out`,
    animationDelay: '5s',
    opacity: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    '@media (max-width: 600px)': {
        fontSize: '5rem',
    },
}));

function SplashScreen() {
    return (
        <SplashContainer>
            <Box className='dancing-script-encabezado' sx={{
                position: 'absolute',
                top: '10%',
                left: '40%',
                transform: 'translateX(-40%)',
                zIndex: 1
            }}>
              <ReactTyped strings={["Un nuevo rayito de sol llega a nuestras vidas..."]} typeSpeed={80} />
            </Box>
            <NameText variant="h1">
                Liam <br />
                Mateo
            </NameText>
        </SplashContainer>
    );
}

export default SplashScreen;