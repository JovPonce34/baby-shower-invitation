import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
const HeaderContainer = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(10),
    marginBottom: theme.spacing(2),
    backgroundImage: `url('../src/assets/header.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    //backgroundImage: 'linear-gradient(to bottom, #FFC107, #FFE082)',
    //borderRadius: '0 0 20px 20px',
}));
function Header() {
    return (
        <HeaderContainer>
            <Typography variant="h3" component="h1" sx={{ color: '#8B4513' }}>
            Baby Shower
            </Typography>
            <Typography variant="h4" sx={{ color: '#8B4513' }}>
            ¡Es un niño!
            </Typography>
        </HeaderContainer>
    );
}
export default Header;