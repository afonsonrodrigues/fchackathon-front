import styled from "styled-components";

export const Container = styled.article`
    /* max-height: 79.2rem; */
    width: 62.2rem;
    color: var(--primary-color-900);
`;

export const ArticleTitle = styled.h1`
    font-size: 4rem;
    line-height: 4.8rem;
    margin-bottom: 2rem;
`;

export const ArticleSubtitle = styled.p`
    font-size: 1.2rem;
    line-height: 2.4rem;
    margin-bottom: 2.4rem;
`;

export const ArticleImage = styled.img`
    width: 100%;
    margin-bottom: 2.4rem;
`;

export const ArticleText = styled.p`
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin-bottom: 4.8rem;
`;

export const CustomButton = styled.button`
    max-width: fit-content;
    padding: 1.6rem 4rem;
    margin-bottom: 4rem;
`;

export const WarningSnackBar = styled.div`
    color: var(--secondary-color-900);
    width: 100%;
    padding: .8rem 2.4rem;
    border: .1rem solid var(--secondary-color-900);
    border-radius: .4rem;
`;

export const WarningImage = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;