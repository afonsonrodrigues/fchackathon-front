import styled from "styled-components";

export const MidiaContainer = styled.div`
    color: var(--primary-color-900);
`;

export const Logo = styled.div`
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const MidiaDiv = styled.div`
`;
