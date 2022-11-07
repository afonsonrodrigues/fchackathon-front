import { CustomForm, InputWrapper } from "./styled";
import api from '../../../services/api';
import { Eye, EyeClosed } from 'phosphor-react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../../styles/utils.css';
import './styles.css';

export default function SignUpForm() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const INITIAL_STATE = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        error: ''
    }
    const [form, setForm] = useState(INITIAL_STATE);

    const handleShowPass = (e) => {
        setShowPass(!showPass)
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm(INITIAL_STATE);

        if (form.password !== form.rePassword) {
            setForm({ ...form, error: 'As senhas não conferem.' });
        }

        try {
            const { error: _, rePassword: __, ...data } = form;
            await api.post('/signup', data);

            navigate('/');
        } catch (error) {
            setForm({ ...form, error: error.response.data.message });
            console.log(form);
        }
    }

    return (
        <CustomForm onSubmit={handleSubmit} className="column gap-24 align-center space-btw">
            <InputWrapper className="column">
                <label htmlFor="name">Nome</label>
                <input onChange={handleChange} name='name' value={form.name} type="text" id="name" placeholder="Digite seu nome" />
            </InputWrapper>
            <InputWrapper className="column">
                <label htmlFor="email">E-mail</label>
                <input onChange={handleChange} name='email' value={form.email} type="text" id="email" placeholder="Digite seu e-mail" />
            </InputWrapper>
            <InputWrapper className="column">
                <label htmlFor="password">Senha</label>
                <input onChange={handleChange} name='password' value={form.password} type={showPass ? 'text' : 'password'} id='password' placeholder="Digite sua senha" />
                {showPass ? <Eye className="show-icon" onClick={handleShowPass} /> : <EyeClosed className="show-icon" onClick={handleShowPass} />}
            </InputWrapper>
            <InputWrapper className="column">
                <label htmlFor="password">Confirme a senha</label>
                <input onChange={handleChange} name='rePassword' value={form.rePassword} type={showPass ? 'text' : 'password'} id='rePassword' placeholder="Digite sua senha" />
                {showPass ? <Eye className="show-icon" onClick={handleShowPass} /> : <EyeClosed className="show-icon" onClick={handleShowPass} />}
                {form.error && <span>{form.error}</span>}
            </InputWrapper>
            <button>Cadastrar</button>
        </CustomForm>
    )
}