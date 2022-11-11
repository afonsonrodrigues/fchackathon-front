import styled from "styled-components";

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
        background-color: ${props => props.primary ? '#FFF' : 'orange'};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    } 
`;
