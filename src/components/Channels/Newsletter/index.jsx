import "../../../styles/utils.css";
import {
    NewsletterContainer,
    InputWrapper,
    InputNewsletter,
    NewsletterButton,
    InputCheck,
    SignDiv,
    ContentDiv,
    TextDiv,
    TittleDiv,
} from "./styled";

export default function Newsletter() {
    return (
        <NewsletterContainer className="row align-center">
            <SignDiv className="row justify-center">
                <ContentDiv className="column align-start">
                    <TittleDiv>Assine nossa newsletter</TittleDiv>
                    <TextDiv>
                        Fique por dentro dos conteúdos da Orange Juice e não
                        perca nenhuma novidade sobre nossa comunidade.
                    </TextDiv>
                </ContentDiv>
            </SignDiv>
            <div>
                <div className="row align-end">
                    <InputWrapper className="column align-start">
                        <label htmlFor="name">Nome</label>
                        <InputNewsletter
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Digite seu nome"
                        />
                    </InputWrapper>
                    <InputWrapper className="column align-start">
                        <label htmlFor="email">E-mail</label>
                        <InputNewsletter
                            name="email"
                            type="text"
                            id="email"
                            placeholder="Digite seu e-mail"
                        />
                    </InputWrapper>
                    <NewsletterButton>Assinar</NewsletterButton>
                </div>
                <div>
                    <InputCheck className="row align-center">
                        <input
                            style={{ width: "1.5rem", marginRight: ".8rem" }}
                            type={"checkbox"}
                        />
                        <div
                            className="column align-start"
                            style={{ marginTop: "1.5rem" }}
                        >
                            <text style={{ fontSize: "14px" }}>
                                Eu concordo em receber comunicações da Orange
                                Juice e do Grupo FCamara.
                            </text>
                            <text style={{ fontSize: "14px" }}>
                                Ao informar meus dados, eustou ciente das
                                diretrizes da&nbsp;
                                <a
                                    href="https://fcamara-images.s3.amazonaws.com/site-fcamara/politica-privacidade.pdf"
                                    target={"_blank"}
                                >
                                    <text
                                        style={{
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Políitica de Privacidade.
                                    </text>
                                </a>
                            </text>
                        </div>
                    </InputCheck>
                </div>
            </div>
        </NewsletterContainer>
    );
}
