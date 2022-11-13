import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import JohnDoe from '../../assets/johndoe.svg';
import Logo from '../../assets/logo.svg';
import { List } from 'phosphor-react';
import ArrowDown from '../../assets/white-arrow-down.svg';
import '../../styles/utils.css';
import LinkAnimationContainer from '../LinkAnimationContainer';
import { CustomHeader, CustomNav, UserContainer } from './styled';
import CustomUserMenu from './UserMenu';

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
            className='w-full py-4 px-2 lg:border-b-[1px] border-solid border-b-white fixed  top-0'
            style={navbar.state ? { backgroundColor: 'var(--secondary-color-800)' } : { backgroundColor: navbar.color }}
        >
            <CustomNav className='mx-auto flex items-center justify-between xl:w-[1248px]'>
                <NavLink to="/home">
                    <img src={Logo} alt="company logo" />
                </NavLink>
                <List className='lg:hidden' size={40} />
                <div className='hidden lg:flex gap-8 align-center'>
                    <LinkAnimationContainer primary>
                        <NavLink to="/home">Home</NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer primary>
                        <NavLink to="/orange/ecosystem">Conheça a comunidade</NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer primary>
                        <NavLink to="/orange/podcast">Podcast</NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer primary>
                        <UserContainer
                            onClick={(e) => setOpenUserMenu(!openUserMenu)}
                            className='flex justify-center items-center gap-2'
                        >
                            {openUserMenu && <CustomUserMenu />}
                            <img src={JohnDoe} alt="avatar john doe" />
                            Usuário
                            <img src={ArrowDown} alt="arrow down" />
                        </UserContainer>
                    </LinkAnimationContainer>
                </div>
            </CustomNav>
        </CustomHeader>
    )
}