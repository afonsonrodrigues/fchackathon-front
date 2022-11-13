import styled from "styled-components";

export const NewsletterContainer = styled.div`
    color: var(--primary-color-50);
    width: 100%;
    height: 25rem;
    background-color: var(--primary-color-900);
    margin-top: 7rem;
    border-bottom: 1px solid var(--primary-color-50);
`;

export const InputWrapper = styled.div`
    margin-right: 3rem;
`;

export const InputNewsletter = styled.input`
    width: 285px;
    padding: 1.6rem;
    border-radius: 2.4rem;
    border: none;
    background-color: var(--primary-color-50);
`;

export const NewsletterButton = styled.button`
    color: var(--secondary-color-200);
    width: 156px;
    padding: 1.6rem 4rem;
    background-color: transparent;
    border: 0.2rem solid var(--secondary-color-200);
`;

export const InputCheck = styled.div`
    position: relative;
    gap: 0.8rem;
`;

export const SignDiv = styled.div`
    width: 39%;
`;

export const ContentDiv = styled.div`
    width: 71%;
    text-align: start;
    margin-bottom: 3rem;
`;

export const TittleDiv = styled.text`
    font-size: 24px;
    color: var(--secondary-color-200);
    font-weight: bold;
`;

export const TextDiv = styled.text`
    font-size: 14px;
    margin-top: 1rem;
`;
