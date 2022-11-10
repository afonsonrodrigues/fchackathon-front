import styled from "styled-components";

export const CustomFooter = styled.div`
    width: 100%;
    height: 25rem;
    padding: 3.2rem 0 5.4rem 9.2rem;
    color: #FFF;
    background-color: var(--primary-color-900);
`;

export const BrandContainer = styled.div`
    margin-right: 17.6rem;
`;

export const RightContainer = styled.div`
    font-size: 1.6rem;
    width: 56.4rem;
`;

export const RightContainerTitle = styled.p`
    font-weight: 500;
`;

export const LinksWrapper = styled.div`
    height: 9.4rem;
    gap: 1.4rem 7.3rem;
    flex-wrap: wrap;
`;

export const AnimationContainer = styled.div`
    width: max-content;
    position: relative;
    border-bottom: 2px solid transparent;
    display: inline-block;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: orange;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    } 
`;

export const textBox = styled.div`
    width: max-content;
`;