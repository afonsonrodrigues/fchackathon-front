import styled from "styled-components";
import SpotifyPhone from '../../assets/mockup_3.png';

export const BannerBg = styled.div`
    background-color: var(--secondary-color-800);
`;

export const BannerContainer = styled.div`
    color: #FFF;
    height: inherit;
    position: relative;
`;

export const BannerTextWrapper = styled.div`

`;

export const BannerTitle = styled.h1`

`;

export const BannerText = styled.p`

`;

export const SpotifyButton = styled.button`
    color: #FFF;
    background-color: transparent;
    border: 2px solid #FFF;
    &:hover {
        color: var(--secondary-color-600);
        background-color: #FFF;
        transition: .5s;
    };
    &:active{
        color: #FFF;
        background-color: var(--secondary-color-800);
        transition: .5s;
    }
`;

export const BannerImageContainer = styled.div`
    background-image: url(${SpotifyPhone});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0;
    right: 0;
`; 

export const EmptyContainer = styled.div`
    width: 40rem;
    min-height: 17.7rem;
`;