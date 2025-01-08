import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Invitation from './components/Invitation';
//import Location from './components/Location';
//import AttendanceForm from './components/AttendanceForm';
import SplashScreen from './components/SplashScreen';
import { styled } from '@mui/material/styles';
import './styles/styles.css';
// Tema personalizado con colores de Winnie Pooh
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC107', // Amarillo de Winnie
      light: '#FFE082',
    },
    secondary: {
      main: '#D32F2F', // Rojo de la camiseta
    },
    background: {
      default: '#ffffff', // Fondo crema suave
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", "Helvetica", "Arial", sans-serif',
  },
});

const MainContent = styled('div')(({ isLoading }) => ({
  opacity: isLoading ? 0 : 1,
  transition: 'opacity 0.5s ease-in-out',
  visibility: isLoading ? 'hidden' : 'visible',
}));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 segundos para asegurar que la animación de fadeOut termine
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && <SplashScreen />}
      <MainContent isLoading={isLoading} className="my-background">
        <Container maxWidth="md">
          <Box sx={{padding: 1}}/>
          <Header />
          <Invitation />
          <Box sx={{padding: 1}}/>
        </Container>
      </MainContent>
    </ThemeProvider>
  );
}

export default App;