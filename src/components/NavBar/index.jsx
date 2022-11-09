import { useEffect, useState } from 'react';
import JohnDoe from '../../assets/johndoe.svg';
import Logo from '../../assets/logo.svg';
import ArrowDown from '../../assets/white-arrow-down.svg';
import CustomUserMenu from './UserMenu';
import { NavLink } from 'react-router-dom';
import '../../styles/utils.css';
import { CustomHeader, CustomNav, UserContainer } from './styled';

export default function NavBar() {
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [navbar, setNavbar] = useState({
        color: 'transparent',
        state: false
    });

    const changeBackground = () => {
        if (window.scrollY < 80) {
            setNavbar({ ...navbar, color: `rgb(87, 25, 197, ${window.scrollY / 70})` });
        }

        if (window.scrollY >= 80) {
            setNavbar({ ...navbar, color: 'var(--secondary-color-800' })
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)
    }, [navbar]);

    return (
        <CustomHeader
            className='column align-center justify-center'
            style={navbar.state ? { backgroundColor: 'var(--secondary-color-800)' } : { backgroundColor: navbar.color }}
        >
            <CustomNav className='row align-center space-btw'>
                <img src={Logo} alt="company logo" />
                <div className='row gap-24 align-center'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/orange/ecosystem">Conheça a comunidade</NavLink>
                    <NavLink to="/orange/podcast">Podcast</NavLink>
                    <UserContainer
                        onClick={(e) => setOpenUserMenu(!openUserMenu)}
                        className='row align-center gap-8'
                    >
                        {openUserMenu && <CustomUserMenu />}
                        <img src={JohnDoe} alt="avatar john doe" />
                        Usuário
                        <img src={ArrowDown} alt="arrow down" />
                    </UserContainer>
                </div>
            </CustomNav>
        </CustomHeader>
    )
}