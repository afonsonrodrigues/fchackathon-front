import styled from "styled-components";

export const MidiaContainer = styled.div`
    color: var(--primary-color-900);
    width: 63%;
    margin-left: 17rem;
`;

export const Logo = styled.div`
    width: ${(props) => props.width || "267px"};
    height: ${(props) => props.height || "267px"};
    background-image: url(${(props) => props.image});
    background-size: cover;
`;

export const MidiaDiv = styled.div`
    margin-top: 7rem;
    width: 100%;
`;
