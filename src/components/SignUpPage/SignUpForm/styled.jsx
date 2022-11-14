import styled from "styled-components";

export const CustomForm = styled.form`
    border-radius: 1.6rem;
    background-color: #fff;
`;

export const InputsContainer = styled.div`
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const LinksContainer = styled.div`

`;


export const CheckboxContainer = styled.div`
    &:hover {
        background-color: var(--primary-color-50);
        transition: 0.5s;
    }
    &:active {
        background-color: var(--primary-color-300);
        transition: 0.1s;
    }
`;