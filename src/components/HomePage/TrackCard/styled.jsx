import styled from "styled-components";

export const CardContainer = styled.div`
    height: 42rem;
    width: 121.6rem;
    padding: 6.4rem 8rem 6rem 7.2rem;
    border-radius: 1.6rem;
    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    position: relative;
`;

export const ActionContainer = styled.div`
    color: var(--primary-color-900);
    width: 62.4rem;
    text-align: start;
`;

export const TrackTitle = styled.h1`
    font-size: 3.2rem;
    line-height: 4.48rem;
`;

export const TrackSubtitle = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.24rem;
`;

export const TrackResume = styled.p`
    font-size: 1.4rem;
    color: var(--primary-color-700);
    line-height: 2.1rem;
`;

export const AccessTrackButton = styled.button`
    width: 23.5rem;
    color: #FFF;
`;

export const ClockImage = styled.img`
    height: 2.4rem;
    width: 2.4rem;
`;

export const ArrowUpImage = styled.img`
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
    cursor: pointer;
    &:hover{
        transform: translate(-50%, -50%) rotate(180deg) scale(1.3);
    }
`;

export const ExpectedTime = styled.span`
    font-size: 1.6rem;
    color: var(--primary-color-700);
`;