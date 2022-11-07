import styled from "styled-components";

export const TrackWrapper = styled.div`
    height: 27rem;
    width: 38rem;
    padding: 6rem 0 2rem 0;
    background-color: blue;
    cursor: pointer;
    &:hover{
        transform: scale(1.001);
    }
`;

export const ArrowDown = styled.img`
    height: 2rem;
    width: 2rem;
    &:hover{
        transform: scale(1.3);
    }
`;