import { CustomUserMenu, MenuItem } from '../styled';
import { useNavigate } from 'react-router-dom';
import { clearStorage } from '../../../utils/storage';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
    const navigate = useNavigate();

    const handleLogout = () => {
        clearStorage();
        navigate('/');
    }

    return (
        <CustomUserMenu className='column align-center justify-center'>
            <MenuItem>
                <NavLink to='/user/details'>
                    Meu progresso
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </CustomUserMenu>
    )
}