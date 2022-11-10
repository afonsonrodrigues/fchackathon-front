import "../../../styles/utils.css";
import { LogoOrangeContainer, Title, LogoEco } from "./styled";

export default function LogoOrange() {
    return (
        <LogoOrangeContainer style={{ display: "flex" }}>
            <Title>Ecossistema</Title>
            <LogoEco />
        </LogoOrangeContainer>
    );
}
