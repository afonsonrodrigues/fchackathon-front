import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "../../../styles/utils.css";
import ClosedEye from "../../ShowPass/ClosedEye";
import OpenedEye from "../../ShowPass/OpenedEye";
import { CustomForm, InputWrapper, LinksContainer } from "./styled";

export default function SignUpForm() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const INITIAL_STATE = {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        error: "",
    };
    const [form, setForm] = useState(INITIAL_STATE);

    const handleShowPass = (e) => {
        setShowPass(!showPass);
    };
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm(INITIAL_STATE);

        if (form.password !== form.rePassword) {
            return setForm({ ...form, error: "As senhas não conferem." });
        }
        if (!isChecked) {
            return setForm({
                ...form,
                error: "É necessário aceitar os termos de uso.",
            });
        }

        try {
            const { error: _, rePassword: __, ...data } = form;
            await api.post("/signup", data);

            navigate("/");
        } catch (error) {
            setForm({ ...form, error: error.response.data.message });
            console.log(form);
        }
    };

    return (
        <CustomForm
            onSubmit={handleSubmit}
            className="column gap-24 align-center space-btw"
        >
            <h1 style={{ fontSize: " 1.4rem" }}>Cadastre-se</h1>
            <InputWrapper className="column">
                <label htmlFor="name">Nome</label>
                <input
                    onChange={handleChange}
                    name="name"
                    value={form.name}
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                />
            </InputWrapper>
            <InputWrapper className="column">
                <label htmlFor="email">E-mail</label>
                <input
                    onChange={handleChange}
                    name="email"
                    value={form.email}
                    type="text"
                    id="email"
                    placeholder="Digite seu e-mail"
                />
            </InputWrapper>
            <InputWrapper className="column">
                <label htmlFor="password">Senha</label>
                <input
                    onChange={handleChange}
                    name="password"
                    value={form.password}
                    type={showPass ? "text" : "password"}
                    id="password"
                    placeholder="Digite sua senha"
                />
                {showPass ? (
                    <OpenedEye setShowPass={setShowPass}
                        showPass={showPass} className="show-icon" onClick={handleShowPass} />
                ) : (
                    <ClosedEye setShowPass={setShowPass}
                        showPass={showPass} className="show-icon" onClick={handleShowPass} />
                )}
            </InputWrapper>
            <InputWrapper className="column">
                <label htmlFor="rePassword">Confirme a senha</label>
                <input
                    onChange={handleChange}
                    name="rePassword"
                    value={form.rePassword}
                    type={showPass ? "text" : "password"}
                    id="rePassword"
                    placeholder="Digite sua senha"
                />
                {showPass ? (
                    <OpenedEye setShowPass={setShowPass}
                        showPass={showPass} className="show-icon" onClick={handleShowPass} />
                ) : (
                    <ClosedEye setShowPass={setShowPass}
                        showPass={showPass} className="show-icon" onClick={handleShowPass} />
                )}
                {form.error && <span className="error-message">{form.error}</span>}
            </InputWrapper>
            <InputWrapper
                className="row align-center"
            >
                <input
                    style={{ width: "1.5rem", marginRight: '.8rem' }}
                    type={"checkbox"}
                    checked={isChecked}
                    onChange={handleOnChange}
                    id='rights'
                />
                <label style={{ fontSize: "1.2rem" }} htmlFor='rights'>
                    Aceite os termos de uso.
                </label>
            </InputWrapper>
            <button className="call-button outer-button">Cadastrar</button>
            <LinksContainer className="column align-center gap-16">
                <p>
                    Já tem conta?{" "}
                    <NavLink to={"/Login"} className="outer-navlink">
                        Entre
                    </NavLink>
                </p>
            </LinksContainer>
        </CustomForm>
    );
}
