import styled from "styled-components";

export const ProgressValue = styled.strong`
    font-size: 1.6rem;
    line-height: 2.24rem;
    margin-bottom: .8rem;
`;

export const ProgressBarUnder = styled.div`
    width: ${props => props.primary ? `${props.primary}%` : '0rem'};
    height: 1.4rem;
    border-radius: 1.6rem;
    background-color: var(--secondary-color-600);
    transition: 1s
`;
export const ProgressBarOver = styled.div`
    width: 100%;
    height: 1.6rem;
    background-color: transparent;
    border: .1rem solid #FFF;
    border-radius: 1.6rem;
`;