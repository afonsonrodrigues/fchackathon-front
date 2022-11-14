import { useEffect } from 'react';
import LoginForm from '../../components/LoginForm';
import { OuterBg } from '../../components/OuterBg/styled';
import Logo from '../../assets/logo.svg';

export default function Login() {

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <OuterBg className='flex flex-col items-center justify-center'>
            <img className='my-8' src={Logo}></img>
            <LoginForm />
        </OuterBg>
    )
}