import styled from "styled-components";
import OrangeLogo from "../../../assets/orangelogo.png";

export const LogoOrangeContainer = styled.div`
    color: var(--primary-color-50);
    width: 90rem;
    margin-top: 20rem;
`;

export const Title = styled.h1`
    font-family: "Blogh", sans-serif;
    font-size: 6rem;
    font-weight: lighter;
`;

export const LogoEco = styled.div`
    width: 23rem;
    height: 17rem;
    background-image: url(${OrangeLogo});
    background-size: contain;
    background-repeat: no-repeat;
`;
