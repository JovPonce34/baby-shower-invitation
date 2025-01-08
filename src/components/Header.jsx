import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImage from '../assets/header.png';

const HeaderContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10),
    marginBottom: theme.spacing(1),
    backgroundImage: `url(${backgroundImage})`,
    filter: 'drop-shadow(0px 4px 8px rgba(14, 13, 12, 0.411))',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //backgroundImage: 'linear-gradient(to bottom, #FFC107, #FFE082)',
    //borderRadius: '0 0 20px 20px',
}));
function Header() {
    return (
        <HeaderContainer>
            <Box className='dancing-script-header'>Baby Shower</Box> 
        </HeaderContainer>
    );
}
export default Header;