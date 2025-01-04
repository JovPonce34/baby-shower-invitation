import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
const HeaderContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10),
    marginBottom: theme.spacing(2),
    backgroundImage: `url('../src/assets/header.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    //backgroundImage: 'linear-gradient(to bottom, #FFC107, #FFE082)',
    //borderRadius: '0 0 20px 20px',
}));
function Header() {
    return (
        <HeaderContainer>
            <div className='dancing-script-header'>Baby Shower</div> 
        </HeaderContainer>
    );
}
export default Header;