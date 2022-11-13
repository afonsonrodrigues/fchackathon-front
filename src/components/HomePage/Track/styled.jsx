import styled from "styled-components";

export const TrackWrapper = styled.div`
    border-radius: 1.6rem;
    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    &:hover{
        transform: scale(1.005);
    }
`;

export const ArrowDown = styled.img`
    height: 2rem;
    width: 2rem;
    &:hover{
        transform: scale(1.3);
    }
`;

export const TrackName = styled.h2`

    color: var(--primary-color-900);
`;