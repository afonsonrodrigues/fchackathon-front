import styled from "styled-components";
import BgImg from '../../assets/fundo2.png'

export const OuterBg = styled.div`
    min-width: 100%;
    min-height: 100vh;
    background-image: url(${BgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;