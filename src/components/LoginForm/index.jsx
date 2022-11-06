import { Eye, EyeClosed } from 'phosphor-react';
import { useState } from 'react';
import { CustomForm, InputWrapper } from './styled.jsx';
import api from '../../services/api';

export default function LoginForm() {
    const [showPass, setShowPass] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
        error: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { error: _, ...data } = form;
            const response = await api.post('/login', data);
        } catch (err) {
            setForm({ ...form, error: err.response.data.message });
        }
    }

    return (
        <CustomForm onSubmit={handleSubmit} className='column gap-24 justify-center'>
            <InputWrapper className='column'>
                <label htmlFor="email">E-mail</label>
                <input name='email' onChange={handleChange} value={form.email} type="text" id='email' placeholder='Digite seu e-mail' />
            </InputWrapper>
            <InputWrapper className='column'>
                <label htmlFor="password">Senha</label>
                <input name='password' onChange={handleChange} value={form.password} type={showPass ? 'text' : 'password'} id='password' placeholder='Digite sua senha' />
                {showPass ? <Eye onClick={handleShowPass} className='show-icon' /> : <EyeClosed onClick={handleShowPass} className='show-icon' />}
                {form.error && <span>{form.error}</span>}
            </InputWrapper>
            <button>Acessar</button>
        </CustomForm>
    )
}