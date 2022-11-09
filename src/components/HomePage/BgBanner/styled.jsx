import styled from "styled-components"
import BannerHome from '../../../assets/banner1.png';

export const BannerContainer = styled.div`
    width: 100%;
    height: 47.7rem;
    background-image: url(${BannerHome});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -1;
`;