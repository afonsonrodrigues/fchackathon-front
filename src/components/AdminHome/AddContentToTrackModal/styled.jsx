import styled from "styled-components";

export const AddContentModal = styled.div`
    width: 47rem;
    padding: 2.5rem;
    background-color: #FFF;
    position: absolute;
    top: calc(50% - 40rem);
    right: calc(50% - 23.5rem);
`;

export const InputWrapper = styled.div`
    height: 6rem;
    display: flex;
    flex-direction: column;
    gap: .4rem;
`;

export const CustomInput = styled.input`
    height: 2rem;
`;
export const TextInput = styled.textarea`
    width: 100%;
    height: 12rem;
    border-radius: 1.6rem;
    padding: .8rem 1.6rem;
`;