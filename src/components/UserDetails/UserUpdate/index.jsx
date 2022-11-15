import { useState } from "react";
import { getItem, setItem } from "../../../utils/storage";
import api from "../../../services/api";
import "../../../styles/utils.css";

import { CustomForm, InputWrapper, UpdateInput, UpdateButton } from "./styled";

export default function UserUpdate({ setupdatePage }) {
    const id = Number(getItem("id"));
    const name = getItem("name");
    const email = getItem("email");
    const INITIAL_STATE = {
        name: name,
        email: email,
        password: "",
    };
    const [form, setForm] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm(INITIAL_STATE);

        try {
            const { error: _, ...data } = form;
            await api.put(`/user/${id}/update`, data);
            setItem("name", data.name);
            setItem("email", data.email);
            setupdatePage(true);
        } catch (error) {
            setForm({ ...form, error: error.response.data.message });
        }
    };

    return (
        <CustomForm
            onSubmit={handleSubmit}
            className="flex flex-col items-center sm:items-start lg:items-start sm:flex sm:flex-row lg:flex lg:flex-row"
        >
            <InputWrapper className="flex flex-col items-center">
                <UpdateInput
                    onChange={handleChange}
                    name="name"
                    value={form.name}
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                />
                <UpdateInput
                    onChange={handleChange}
                    name="email"
                    value={form.email}
                    type="text"
                    id="email"
                    placeholder="Digite seu e-mail"
                />
                <UpdateInput
                    onChange={handleChange}
                    name="password"
                    value={form.password}
                    type={"text"}
                    id="password"
                    placeholder="Digite sua senha"
                />
                {form.error && (
                    <span className="error-message">{form.error}</span>
                )}
            </InputWrapper>
            <UpdateButton className="call-button outer-button sm:ml-7 lg:ml-32">
                Salvar
            </UpdateButton>
        </CustomForm>
    );
}
