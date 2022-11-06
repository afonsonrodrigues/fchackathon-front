import { Eye, EyeClosed } from 'phosphor-react';
import { useState } from 'react';
import { CustomForm, InputWrapper } from './styled.jsx';

export default function LoginForm() {
    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    return (
        <CustomForm className='column gap-24 justify-center'>
            <InputWrapper className='column'>
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder='Digite seu e-mail' />
            </InputWrapper>
            <InputWrapper className='column'>
                <label htmlFor="password">Senha</label>
                <input type={showPass ? 'text' : 'password'} placeholder='Digite sua senha' />
                {showPass ? <Eye onClick={handleShowPass} className='show-icon' /> : <EyeClosed onClick={handleShowPass} className='show-icon' />}
            </InputWrapper>
            <button>Acessar</button>
        </CustomForm>
    )
}