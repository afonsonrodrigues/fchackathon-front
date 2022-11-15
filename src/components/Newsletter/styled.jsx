import styled from "styled-components";

export const CustomButtom = styled.button`
    color: var(--secondary-color-200);
    border: 2px solid var(--secondary-color-200);
`;

export const CheckboxContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    &:hover{
        background-color: var(--primary-color-800);
        transition: .5s;
    }
    &:active{
        background-color: var(--primary-color-100);
        background-color: var(--primary-color-400);
        transition: .1s;
    }
`;