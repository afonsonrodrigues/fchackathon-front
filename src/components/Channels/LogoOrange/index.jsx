import "../../../styles/utils.css";
import { LogoOrangeContainer, Title, LogoEco } from "./styled";

export default function LogoOrange() {
    return (
        <LogoOrangeContainer className="row align-center space-btw">
            <Title>Ecossistema</Title>
            <LogoEco />
        </LogoOrangeContainer>
    );
}
