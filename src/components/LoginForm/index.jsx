import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../assets/google-icon.svg';
import api from '../../services/api';
import '../../styles/utils.css';
import { setItem } from '../../utils/storage';
import ClosedEye from '../ShowPass/ClosedEye';
import OpenedEye from '../ShowPass/OpenedEye';
import { CustomForm, InputsContainer, InputWrapper, LinksContainer, GoogleButton } from './styled.jsx';

export default function LoginForm({ path }) {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: '',
        error: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (path === '/admin/login') {
                const { error: _, ...formData } = form;
                const { data } = await api.post('/admin/login', formData);

                navigate('/admin/home');
                return;
            }

            const { error: _, ...formData } = form;
            const { data } = await api.post('/login', formData);

            setItem('token', data.token);
            setItem('id', data.logedUser.id);
            setItem('email', data.logedUser.email);
            setItem('name', data.logedUser.name);

            navigate('/home');
        } catch (err) {
            setForm({ ...form, error: err.response.data.message });
        }
    }

    return (
        <CustomForm onSubmit={handleSubmit} className='column align-center gap-24'>
            <h1 style={{ maginBottom: '.8rem' }}>Login</h1>
            <InputsContainer className='column gap-24'>
                <InputWrapper className='column'>
                    <label htmlFor="email">E-mail</label>
                    <input name='email' onChange={handleChange} value={form.email} type="text" id='email' placeholder='Digite seu e-mail' />
                </InputWrapper>
                <InputWrapper className='column'>
                    <label htmlFor="password">Senha</label>
                    <input name='password' onChange={handleChange} value={form.password} type={showPass ? 'text' : 'password'} id='password' placeholder='Digite sua senha' />
                    {showPass ? <OpenedEye showPass={showPass} setShowPass={setShowPass} /> : <ClosedEye showPass={showPass} setShowPass={setShowPass} size={20} className='show-icon' />}
                    {form.error && <span className='error-message'>{form.error}</span>}
                </InputWrapper>
            </InputsContainer>
            <button className='call-button outer-button'>Entrar</button>
            <LinksContainer className='column align-center gap-16'>
                <p>Ainda não tem conta? <NavLink className='outer-navlink' style={{ textDecoration: 'underline' }}>Cadastre-se</NavLink></p>
                <NavLink style={{ color: 'var(--primary-color-900)', textDecoration: 'underline' }}>Recuperar senha</NavLink>
            </LinksContainer>
            <GoogleButton className='outer-button row align-center justify-center gap-8'>
                <img src={GoogleIcon} alt="google's icon" />
                Entrar com o Google
            </GoogleButton>
        </CustomForm>
    )
}