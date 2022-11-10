import styled from "styled-components";

export const EyeContainer = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - .05rem);
    right: calc(5% - 1rem);
    cursor: pointer;
    z-index: 1;
    &:hover {
        background-color: var(--primary-color-50);
        transition: 0.5s;
    }
    &:active {
        background-color: var(--primary-color-300);
        transition: 0.1s;
    }
`;