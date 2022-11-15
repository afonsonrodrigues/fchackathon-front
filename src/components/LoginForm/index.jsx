import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/google-icon.svg";
import api from "../../services/api";
import "../../styles/utils.css";
import { setItem } from "../../utils/storage";
import ClosedEye from "../ShowPass/ClosedEye";
import OpenedEye from "../ShowPass/OpenedEye";
import {
    CustomForm,
    InputsContainer,
    InputWrapper,
    LinksContainer,
    GoogleButton,
} from "./styled.jsx";

export default function LoginForm({ path }) {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
        error: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (path === "/admin/login") {
                const { error: _, ...formData } = form;
                const { data } = await api.post("/admin/login", formData);

                navigate("/admin/home");
                return;
            }

            const { error: _, ...formData } = form;
            const { data } = await api.post("/login", formData);

            setItem("token", data.token);
            setItem("id", data.logedUser.id);
            setItem("email", data.logedUser.email);
            setItem("name", data.logedUser.name);

            navigate("/home");
        } catch (err) {
            setForm({ ...form, error: err.response.data.message });
        }
    };

    return (
        <CustomForm
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full xs:w-[390px] px-4 pt-4 lg:mt-[72px] h-[582px] sm:h-[559px]"
        >
            <h1 className="mb-4 text-base font-bold">Login</h1>
            <InputsContainer className="flex flex-col justify-center mb-[52px] sm:mb-[40px]">
                <InputWrapper className="flex flex-col mb-6 sm:mb-2">
                    <label style={{ color: 'var(--primary-color-800)' }} className="text-base mb-2" htmlFor="email">E-mail</label>
                    <input
                        className="w-[328px] xs:w-[358px] h-12 sm:h-[52px] p-4 placeholder:text-sm"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                        type="text"
                        id="email"
                        placeholder="Digite seu e-mail"
                    />
                </InputWrapper>
                <InputWrapper className="flex flex-col">
                    <label style={{ color: 'var(--primary-color-800)' }} className="text-base mb-2" htmlFor="password">Senha</label>
                    <input
                        className="w-[328px] xs:w-[358px] h-12 sm:h-[52px] p-4 placeholder:text-sm"
                        name="password"
                        onChange={handleChange}
                        value={form.password}
                        type={showPass ? "text" : "password"}
                        id="password"
                        placeholder="Digite sua senha"
                    />
                    {showPass ? (
                        <OpenedEye
                            showPass={showPass}
                            setShowPass={setShowPass}
                            size={20}
                        />
                    ) : (
                        <ClosedEye
                            showPass={showPass}
                            setShowPass={setShowPass}
                            size={20}
                            className=""
                        />
                    )}
                    {form.error && (
                        <span className="error-message">{form.error}</span>
                    )}
                </InputWrapper>
            </InputsContainer>
            <button className="call-button w-full xs:w-[358px] h-[52px] mb-12">Entrar</button>
            <LinksContainer className="font-medium flex flex-col items-center gap-4 mb-8">
                <p className="text-sm " style={{ color: "var(--primary-color-900)" }}>
                    Ainda não tem conta?{" "}
                    <NavLink to={"/signup"} className="outer-navlink">
                        Cadastre-se
                    </NavLink>
                </p>
                <NavLink className='font-medium text-sm underline' style={{ color: "var(--primary-color-900)" }}>
                    Recuperar senha
                </NavLink>
            </LinksContainer>
            <GoogleButton className="w-full xs:w-[358px] h-[52px] flex items-center justify-center gap-2 font-normal">
                <img src={GoogleIcon} alt="google's icon" />
                Entrar com o Google
            </GoogleButton>
        </CustomForm>
    );
}
