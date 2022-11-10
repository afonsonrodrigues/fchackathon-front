import styled from "styled-components";

export const CustomHeader = styled.header`
    width: 100%;
    height: 9.2rem;
    border-bottom: 1px solid #FFF;
    position: fixed;
    z-index: 2;
    &.scrolled{
        background: black;
    }
`;

export const CustomNav = styled.nav`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.24rem;
    color: #FFF;
    width: 121.6rem;
`;

export const UserContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

export const CustomUserMenu = styled.div`
    text-align: center;
    width: 15rem;
    height: 7.2rem;
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
    font-weight: 400;
    width: 100%;
    height: 50%;
    line-height: 40px;
    &:hover{
        background-color: var(--primary-color-200);
        transition: .5s;
    }
    &:active{
        background-color: var(--primary-color-400);
        transition: .1s;
    }
`;