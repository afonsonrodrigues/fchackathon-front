import { NavLink, useNavigate } from "react-router-dom";
import ColoredLogo from '../../assets/colored-logo.svg';
import '../../styles/utils.css';

export default function FloatMenu({ openFloatMenu, setOpenFloatMenu }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setOpenFloatMenu(false);
        clearStorage();
        navigate('/');
    }

    const handleCloseFoat = (e) => {
        setOpenFloatMenu(false);
        console.log('bateu');
    }

    return (
        <div
            onClick={handleCloseFoat}
            className="modal-bg w-[2560px] h-screen fixed left-[-1024px] bottom-[-1200px] top-[-16px] right-[2550px] z-[-3]"
        >
            <div className="h-screen w-[300px] flex flex-col items-center fixed right-0 top-0 bg-white text-[#1D1D1F] py-10 rounded-tl-2xl z-30 overflow-hidden">
                <img className="w-[104px] h-[60px] mb-10" src={ColoredLogo} alt="company logo" />
                <div className="flex flex-col gap-6 items-center text-base font-bold">
                    <NavLink onClick={(e) => setOpenFloatMenu(false)} className='h-8 w-in' to='/home'>Home</NavLink>
                    <NavLink onClick={(e) => setOpenFloatMenu(false)} to='/channels'>Conheça a comunidade</NavLink>
                    <NavLink onClick={(e) => setOpenFloatMenu(false)} to='/podcast'>Podcast</NavLink>
                    <NavLink onClick={(e) => setOpenFloatMenu(false)} to='/user/details'>Meu progresso</NavLink>
                    <NavLink to='/' onClick={handleLogout}>Sair</NavLink>
                </div>
            </div>
        </div >
    )
}