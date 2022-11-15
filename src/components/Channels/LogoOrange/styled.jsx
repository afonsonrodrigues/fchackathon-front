import styled from "styled-components";
import OrangeLogo from "../../../assets/orangelogo.png";

export const LogoOrangeContainer = styled.div`
    color: var(--primary-color-50);
`;

export const Title = styled.h1`
    font-family: "Blogh", sans-serif;
`;

export const LogoEco = styled.div`
    background-image: url(${OrangeLogo});
    background-size: contain;
    background-repeat: no-repeat;
`;
