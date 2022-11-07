import Logo from '../../assets/logo.svg';
import JohnDoe from '../../assets/johndoe.svg';
import '../../styles/utils.css';

export default function NavBar() {
    return (
        <header>
            <nav className='row align-center space-btw'>
                <img src={Logo} alt="company logo" />
                <div className='row gap-24 align-center'>
                    <a href="#">Home</a>
                    <a href="#">Conheça a comunidade</a>
                    <a href="#">Orange Juice</a>
                    <img src={JohnDoe} alt="avatar john doe" />
                </div>
            </nav>
        </header>
    )
}