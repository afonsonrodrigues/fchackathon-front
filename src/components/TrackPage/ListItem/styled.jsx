import styled from "styled-components";

export const ContentRow = styled.div`
    min-height: 8.9rem;
    padding: 0 0 0 8px;
    border-radius: 1.6rem;
    cursor: pointer;
    &:hover {
        background-color: var(--primary-color-50);
        transition: .5s;
    }
    &:active {
        background-color: var(--primary-color-100);
        transition: .3s;
    }
`;

export const ItemInfoWrapper = styled.div`

`;

export const TitleWrapper = styled.div`
    width: 36.5rem;
`;

export const TypeTag = styled.span`
    padding: .2rem 1rem;
    border-radius: 1.6rem;
    background-color: var(--secondary-color-100);
`;

export const CustomCheckboxWrapper = styled.div`
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    &:hover{
        background-color: var(--primary-color-200);
        transition: .5s;
    }
    &:active{
        background-color: var(--primary-color-300);
        transition: .3s;
    }
`;

export const CustomCheckBox = styled.input`
    cursor: pointer;
`;