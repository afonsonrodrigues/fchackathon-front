import LoginForm from '../../components/LoginForm';
import { OuterBg } from '../../components/OuterBg/styled';
import { useEffect } from 'react';
import { OuterTitle } from './styled';

export default function Login() {

    useEffect(() => {
        const canControlScrollRestoration = 'scrollRestoration' in window.history
        if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <OuterBg className='column align-center justify-center'>
            <OuterTitle>Orange Evolution</OuterTitle>
            <LoginForm />
        </OuterBg>
    )
}