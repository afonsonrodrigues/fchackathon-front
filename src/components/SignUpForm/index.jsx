import { CustomForm } from "./styled";
import '../../styles/utils.css';

export default function SignUpForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('teste');
    }

    return (
        <CustomForm onSubmit={handleSubmit} className="column gap-24 align-center space-btw">
            <div className="column">
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="column">
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
            </div>
            <div className="column">
                <label htmlFor="password">Senha</label>
                <input type="text" placeholder="Digite sua senha" />
            </div>
            <div className="column">
                <label htmlFor="password">Confirme a senha</label>
                <input type="text" placeholder="Digite sua senha" />
            </div>
            <button>Cadastrar</button>
        </CustomForm>
    )
}