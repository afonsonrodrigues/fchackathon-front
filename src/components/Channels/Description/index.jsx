import "../../../styles/utils.css";
import {
    DescriptionContainer,
    Title,
    TitleDiv,
    TextDiv,
    TextDescription,
} from "./styled";

export default function Description() {
    return (
        <DescriptionContainer className="">
            <TitleDiv className="">
                <Title>Suco de Laranja?</Title>
                <Title>O que é isso?</Title>
            </TitleDiv>
            <TextDiv className="">
                <TextDescription>
                    A tecnologia se tornou o grande universo de linguagens,
                    frameworks e novas ferramentas para o nosso cotidiano. Mas,
                    existe algo que é muito importante quando se decide se
                    aventurar nesse mercado: o aprendizado contínuo.
                </TextDescription>
                <TextDescription>
                    Pensando nisso, criamos a Orange Juice, um grande
                    ecossistema que busca aproximar os amantes da tecnologia
                    interessados em ingressar no mercado de TI.
                </TextDescription>
            </TextDiv>
        </DescriptionContainer>
    );
}
