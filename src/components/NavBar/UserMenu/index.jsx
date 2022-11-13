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
        <CustomUserMenu className='w-[151px] h-[72px] flex flex-col'>
            <MenuItem className='flex items-center justify-center h-1/2 w-full'>
                <NavLink to='/user/details'>
                    Meu progresso
                </NavLink>
            </MenuItem>
            <MenuItem className='flex items-center justify-center h-1/2 w-full' onClick={handleLogout}>Sair</MenuItem>
        </CustomUserMenu>
    )
}