import styled from "styled-components";

export const CampListWrap = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`

export const CampListItems = styled.div`
    width: 1000px;
    height: 300px;
    display: inline-block;
`
export const CampListImage = styled.div`
    display: inline-block;
    & > img{
        width: 320px;
        height: 240px;
    }
`

export const CampListInfo = styled.div`
    display: inline-block;
    text-align: left;
    width: 600px;
    height: 300px;
`