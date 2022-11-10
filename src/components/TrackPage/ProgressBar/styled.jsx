import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    width: 28.1rem;
    height: 8.8rem;
    align-items: flex-end;
`;

export const Title = styled.strong`
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 1.4rem;
`;

export const ProgressValue = styled.strong`
    font-size: 1.6rem;
    line-height: 2.24rem;
    margin-bottom: .8rem;
`;

export const ProgressBarUnder = styled.div`
    width: 50%;
    height: 1.4rem;
    border-radius: 1.6rem;
    background-color: var(--secondary-color-600);
`;
export const ProgressBarOver = styled.div`
    width: 100%;
    height: 1.6rem;
    background-color: transparent;
    border: .1rem solid #FFF;
    border-radius: 1.6rem;
`;