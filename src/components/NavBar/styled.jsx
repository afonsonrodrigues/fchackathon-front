import styled from "styled-components";

export const CustomHeader = styled.header`
    z-index: 2;
`;

export const CustomNav = styled.nav`
    color: #FFF;
`;

export const UserContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

export const CustomUserMenu = styled.div`
    text-align: center;
    border-radius: 1.6rem;
    color: var(--primary-color-900);
    background-color: #FFF;
    position: absolute;
    top: 110%;
    right: -5%;
    overflow: hidden;
    transition: 1s;
`;

export const MenuItem = styled.span`
    &:hover{
        background-color: var(--primary-color-200);
        transition: .5s;
    }
    &:active{
        background-color: var(--primary-color-400);
        transition: .1s;
    }
`;