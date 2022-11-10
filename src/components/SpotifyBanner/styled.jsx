import styled from "styled-components";
import SpotifyPhone from '../../assets/mockup_2.png';

export const BannerBg = styled.div`
    width: 100%;
    height: 40rem;
    margin-top: 10.7rem;
    background-color: var(--secondary-color-800);
`;

export const BannerContainer = styled.div`
    color: #FFF;
    width: 121.6rem;
    height: inherit;
    padding: 0 0 0 7.4rem;
    position: relative;
`;

export const BannerTextWrapper = styled.div`
    width: 41.6rem;
    height: 17.7rem;
`;

export const BannerTitle = styled.h1`
    font-size: 2.4rem;
    line-height: 2.88rem;
`;

export const BannerText = styled.p`
    font-size: 1.6rem;
    line-height: 2.4rem;
`;

export const SpotifyButton = styled.button`
    color: #FFF;
    background-color: transparent;
    width: 17.9rem;
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
    width: 65.8rem;
    height: 42.3rem;
    background-image: url(${SpotifyPhone});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: -14rem;
`; 

export const EmptyContainer = styled.div`
    width: 40rem;
    min-height: 17.7rem;
`;