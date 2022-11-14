import styled from "styled-components";

export const ListContainer = styled.div`
    border-radius: 1.6rem;
    background-color: #FFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
