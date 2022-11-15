import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
`;

export const UserTracksContainer = styled.section`
    padding-top: 7.5rem;
    text-align: start;
`;

export const SectionTitle = styled.h1``;

export const TracksContainer = styled.div``;

export const ButtonDel = styled.button`
    color: var(--secondary-color-600);
    width: 210px;
    padding: 1rem;
    background-color: transparent;
    border: 0.2rem solid var(--secondary-color-600);
    margin-top: 1.5rem;
`;
export const ButtonTrack = styled.button`
    color: var(--secondary-color-600);
    width: 300px;
    padding: 1rem;
    background-color: transparent;
    border: 0.2rem solid var(--secondary-color-600);
    margin-top: 1.5rem;
`;
export const MenuPageUser = styled.div`
    color: var(--primary-color-50);
    padding: 0.5rem;
    cursor: pointer;
    text-decoration-line: ${(props) => props.under};
`;
export const TrackWrapper = styled.div`
    border-radius: 1.6rem;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
`;
