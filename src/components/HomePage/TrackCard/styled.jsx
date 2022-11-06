import styled from "styled-components";

export const CardContainer = styled.div`
    height: 42rem;
    width: 120.4rem;
    padding: 6rem 7rem;
    background-color: red;
    position: relative;
`;

export const ActionContainer = styled.div`
    width: 62.4rem;
    text-align: start;
`;

export const AccessTrackButton = styled.button`
    width: 34.4rem;
    height: 4.8rem;
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