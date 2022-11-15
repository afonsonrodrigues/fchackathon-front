import { CustomUserMenu, MenuItem } from '../styled';
import { useNavigate } from 'react-router-dom';
import { clearStorage } from '../../../utils/storage';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';

export default function UserMenu({ setOpenUserMenu }) {
    const navigate = useNavigate();
    const userMenuRef = useRef();

    const handleLogout = () => {
        clearStorage();
        navigate('/');
    }

    const handleListenClick = (e) => {
        if (userMenuRef.current !== e.target) {
            setOpenUserMenu(false)
        }
    }
    document.addEventListener("mousedown", handleListenClick);

    return (
        <CustomUserMenu
            className='w-[151px] h-[72px] flex flex-col'
            ref={userMenuRef}
        >
            <MenuItem className='flex items-center justify-center h-1/2 w-full'>
                <NavLink to='/user/details'>
                    Meu progresso
                </NavLink>
            </MenuItem>
            <MenuItem className='flex items-center justify-center h-1/2 w-full' onClick={handleLogout}>Sair</MenuItem>
        </CustomUserMenu>
    )
}