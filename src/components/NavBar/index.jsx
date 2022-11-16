
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
import FloatMenu from '../FloatMenu';
import { getItem } from "../../utils/storage";
import { UserMenuBg } from './styled';

export default function NavBar(props) {
    const [openUserMenu, setOpenUserMenu] = useState(false);

    const userName = getItem("name").split(" ")[0];
    const [openFloatMenu, setOpenFloatMenu] = useState(false);

    const [navbar, setNavbar] = useState({
        color: "transparent",
        state: false
    });

    const changeBackground = () => {
        if (window.scrollY < 80) {
            setNavbar({
                ...navbar,
                color: `rgb(${props.rgb || "87, 25, 197"}, ${window.scrollY / 70
                    })`
            });
        }

        if (window.scrollY >= 80) {
            setNavbar({
                ...navbar,
                color: `var(${props.rgb || "--secondary-color-600"}`
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, [navbar]);

    return (
        <CustomHeader
            className='w-full py-4 px-2 lg:border-b-[1px] border-solid border-b-white fixed top-0'
            style={navbar.state ? { backgroundColor: 'var(--secondary-color-600)' } : { backgroundColor: navbar.color }}
        >
            <CustomNav className='mx-auto flex relative items-center justify-between xl:w-[1280px]'>
                <NavLink to="/home">
                    <img src={Logo} alt="company logo" />
                </NavLink>
                <List onClick={(e) => setOpenFloatMenu(!openFloatMenu)} className='lg:hidden' size={40} />
                {openFloatMenu && <FloatMenu setOpenFloatMenu={setOpenFloatMenu} />}
                <div className='hidden lg:flex gap-8 align-center'>
                    <LinkAnimationContainer primary>
                        <NavLink to="/home">Home</NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer primary>
                        <NavLink to="/channels">Conheça a comunidade</NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer primary>
                        <NavLink to="/orange/podcast">Podcast</NavLink>
                    </LinkAnimationContainer>
                    <LinkAnimationContainer primary>
                        <UserContainer
                            setOpenUserMenu={setOpenUserMenu}
                            onClick={(e) => setOpenUserMenu(!openUserMenu)}

                            className='flex justify-center items-center gap-2'

                        >
                            {openUserMenu && <UserMenuBg className='fixed bg-transparent w-full h-full left-0 bottom-0 cursor-default z-0' />}
                            {openUserMenu && <CustomUserMenu openFloatMenu={openFloatMenu} setOpenUserMenu={setOpenUserMenu} />}
                            <img src={JohnDoe} alt="avatar john doe" />
                            {userName ? userName : "Usuário"}
                            <img src={ArrowDown} alt="arrow down" />
                        </UserContainer>
                    </LinkAnimationContainer>
                </div>
            </CustomNav>
        </CustomHeader>
    );
}
