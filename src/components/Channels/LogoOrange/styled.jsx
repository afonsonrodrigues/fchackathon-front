import styled from "styled-components";
import OrangeLogo from "../../../assets/orangelogo.png";

export const LogoOrangeContainer = styled.div`
    color: #fff;
    width: 62rem;
`;

export const Title = styled.h1`
    font-size: 6rem;
    font-weight: 600;
`;

export const LogoEco = styled.div`
    width: 20rem;
    height: 15rem;
    background-image: url(${OrangeLogo});
    background-size: cover;
`;
