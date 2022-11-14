import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "../../../styles/utils.css";
import ClosedEye from "../../ShowPass/ClosedEye";
import OpenedEye from "../../ShowPass/OpenedEye";
import { CheckboxContainer, CustomForm, InputWrapper, LinksContainer } from "./styled";

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
        }
    };

    return (
        <CustomForm
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full lg:w-[392px] px-4 pt-4 lg:mt-[72px]">
            <h1 className="mb-4 text-sm font-bold">Cadastre-se</h1>
            <div className="flex flex-col justify-center mb-8">
                <InputWrapper className="flex flex-col mb-4">
                    <label style={{ color: 'var(--primary-color-800)' }} className="text-sm mb-2" htmlFor="email">Nome</label>
                    <input
                        className="w-[328px] xs:w-[358px] p-4 placeholder:text-sm"
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        id="email"
                        placeholder="Digite seu e-mail"
                    />
                </InputWrapper>
                <InputWrapper className="flex flex-col mb-4">
                    <label style={{ color: 'var(--primary-color-800)' }} className="text-sm mb-2" htmlFor="email">E-mail</label>
                    <input
                        className="w-[328px] xs:w-[358px] h-[52px] px-4 placeholder:text-sm"
                        onChange={handleChange}
                        name="email"
                        value={form.email}
                        type="text"
                        id="email"
                        placeholder="Digite seu e-mail"
                    />
                </InputWrapper>
                <InputWrapper className="flex flex-col mb-4">
                    <label style={{ color: 'var(--primary-color-800)' }} className="text-sm mb-2" htmlFor="password">Senha</label>
                    <input
                        className="w-[328px] xs:w-[358px] p-4 placeholder:text-sm"
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
                <InputWrapper className="flex flex-col mb-4">
                    <label style={{ color: 'var(--primary-color-800)' }} className="text-sm mb-2" htmlFor="rePassword">Confirme sua senha</label>
                    <input
                        className="w-[328px] xs:w-[358px]   p-4 placeholder:text-sm"
                        onChange={handleChange}
                        name="rePassword"
                        value={form.rePassword}
                        type={showPass ? "text" : "password"}
                        id="rePassword"
                        placeholder="Confirme sua senha"
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
                <div
                    className="flex items-center jus mb-4"
                >
                    <CheckboxContainer className="flex items-center justify-center w-10 h-10 rounded-full mr-3 cursor-pointer">
                        <input
                            className='w-[15px]'
                            type={"checkbox"}
                            checked={isChecked}
                            onChange={handleOnChange}
                            id='rights'
                        />
                    </CheckboxContainer>
                    <label className="text-sm" style={{ color: 'var(--primary-color-800)' }} htmlFor='rights'>
                        Aceite os termos de uso.
                    </label>
                </div>
                <button className="call-button w-full xs:w-[358px] h-[52px] mb-6">Cadastrar</button>
                <LinksContainer className="font-medium flex flex-col items-center">
                    <p style={{ color: 'var(--primary-color-800)' }}>
                        Já tem conta?{" "}
                        <NavLink to={"/Login"} className="outer-navlink">
                            Entre
                        </NavLink>
                    </p>
                </LinksContainer>
            </div>
        </CustomForm>
    );
}
