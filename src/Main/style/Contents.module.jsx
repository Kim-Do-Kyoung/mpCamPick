import styled from "styled-components";

export const ContentsWrap = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    @media (max-width: 500px){
        position: static;
        height: auto;
    }
`

export const MainSearch = styled.div`
    width: 100%;
`
