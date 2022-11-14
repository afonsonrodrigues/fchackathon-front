import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius: 1.6rem;
    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 1;
    &:hover{
        transform: scale(1.005);
    }
`;

export const ActionContainer = styled.div`
    color: var(--primary-color-900);
    text-align: start;
`;

export const TrackTitle = styled.h1`
`;

export const TrackSubtitle = styled.p`
`;

export const TrackResume = styled.p`
    color: var(--primary-color-700);

`;

export const AccessTrackButton = styled.button`
    color: #FFF;
`;

export const ClockImage = styled.img`
`;

export const ArrowUpImage = styled.img`
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
    cursor: pointer;
    &:hover{
        transform: translate(-50%, -50%) rotate(180deg) scale(1.3);
    }
`;

export const ExpectedTime = styled.span`
    color: var(--primary-color-700);
`;