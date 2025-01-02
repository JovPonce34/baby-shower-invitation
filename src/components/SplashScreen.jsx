import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

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

const SplashContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#1E90FF', // Azul brillante
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: `${fadeOut} 0.5s ease-in-out forwards`,
    animationDelay: '3s',
}));

const NameText = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '4rem',
    //fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'SolidDice',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    animation: `${bounceIn} 1s ease - out`,
    '@media (max-width: 600px)': {
        fontSize: '2.5rem',
    },
}));

function SplashScreen() {
    return (
        <SplashContainer>
            <NameText variant="h1">
                Liam <br />               
                Matheo
            </NameText>
        </SplashContainer>
    );
}

export default SplashScreen;