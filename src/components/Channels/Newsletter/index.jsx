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
        <NewsletterContainer className="">
            <SignDiv className="">
                <ContentDiv className="">
                    <TittleDiv>Assine nossa newsletter</TittleDiv>
                    <TextDiv>
                        Fique por dentro dos conteúdos da Orange Juice e não
                        perca nenhuma novidade sobre nossa comunidade.
                    </TextDiv>
                </ContentDiv>
            </SignDiv>
            <div>
                <div className="">
                    <InputWrapper className="">
                        <label htmlFor="name">Nome</label>
                        <InputNewsletter
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Digite seu nome"
                        />
                    </InputWrapper>
                    <InputWrapper className="">
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
                    <InputCheck className="">
                        <input
                            type="checkbox"
                        />
                        <div
                            className=""
                        >
                            <p>
                                Eu concordo em receber comunicações da Orange
                                Juice e do Grupo FCamara.
                            </p>
                            <p style={{ fontSize: "14px" }}>
                                Ao informar meus dados, eustou ciente das
                                diretrizes da&nbsp;
                                <a
                                    href="https://fcamara-images.s3.amazonaws.com/site-fcamara/politica-privacidade.pdf"
                                    target={"_blank"}
                                >
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Políitica de Privacidade.
                                    </p>
                                </a>
                            </p>
                        </div>
                    </InputCheck>
                </div>
            </div>
        </NewsletterContainer>
    );
}
