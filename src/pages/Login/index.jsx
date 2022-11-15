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
        <OuterBg className='flex flex-col items-center lg:flex-row lg:justify-between lg:px-16 xl:justify-center'>
            <div className='flex flex-col items-center lg:w-full lg:flex-row lg:justify-between xl:w-[1152px]'>
                <div className='text-white hidden lg:block lg:w-[404px] xl:w-[519px] relative'>
                    <h1 className='text-[32px] mb-4 xl:text-5xl'>Evolua a sua carreira na tecnologia</h1>
                    <ul className='flex flex-col gap-1 text-lg font-semibold xl:text-xl'>
                        <li>Conteúdo tech de gratuito e de alta qualidade</li>
                        <li>Migração de carreira para a área tech</li>
                        <li>Apoio de uma comunidade vitaminada!</li>
                        <li>Prepare-se de forma mais assertiva para processos seletivos</li>
                    </ul>
                </div>
                <img className='my-8 lg:absolute lg:top-0' src={Logo}></img>
                <LoginForm />
            </div>
        </OuterBg>
    )
}