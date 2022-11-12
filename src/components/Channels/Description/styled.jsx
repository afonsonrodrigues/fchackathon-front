import styled from "styled-components";

export const DescriptionContainer = styled.div`
    color: var(--primary-color-900);
    margin-top: 13rem;
    justify-content: center;
    margin-bottom: 5rem;
`;

export const Title = styled.h1`
    font-size: 40px;
`;

export const TitleDiv = styled.div`
    width: 43rem;
`;

export const TextDiv = styled.div`
    text-align: start;
    max-width: 50rem;
`;

export const TextDescription = styled.div`
    font-size: 16px;
    margin-top: ${(props) => props.marginTop};
`;
