import "../../../styles/utils.css";
import { LogoOrangeContainer, Title, LogoEco } from "./styled";

export default function LogoOrange() {
    return (
        <LogoOrangeContainer className="flex items-center justify-between">
            <Title>Ecossistema</Title>
            <LogoEco />
        </LogoOrangeContainer>
    );
}
