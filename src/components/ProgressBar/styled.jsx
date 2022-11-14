import styled from "styled-components";

export const ProgressValue = styled.strong`
`;

export const ProgressBarUnder = styled.div`
    width: ${props => props.primary ? `${props.primary}%` : '0rem'};
    border-radius: 1.6rem;
    background-color: ${props => props.color ? `${props.color}` : '#FFF'};
    transition: 1s;
`;
export const ProgressBarOver = styled.div`
    width: 100%;
    background-color: transparent;
    border: .1rem solid ${props => props.color ? `${props.color}` : '#FFF'};
    border-radius: 1.6rem;
`;