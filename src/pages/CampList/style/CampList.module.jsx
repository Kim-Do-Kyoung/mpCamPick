import styled from "styled-components";

export const CampListWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    grid-gap: 30px;
    .searchCount {
        text-align: left;
        font-size: 30px;
        padding: 30px;
        font-family: 'yg-jalnan';
        margin-left: 8%;
    }
    @media (max-width: 1440px){
        .searchCount{
            font-size: 20px;
            padding: 20px;
        }
    }
`

export const CampListItems = styled.div`
    width: 1200px;
    margin: 0 auto;
    height: 300px;
    background-color: #eee;
    padding: 20px;
    margin-bottom: 30px;
    position: relative;

    @media (max-width: 1440px){
        width: 80%;
        height: auto;
    }
`

export const CampListImage = styled.div`
    display: inline-block;
    position: absolute;
    left: 2%;
    top: 5%;
    & > img {
        width: 360px;
        height: 270px;
    }
    
    @media (max-width: 1440px) {
        position: static;
        text-align: center;
        & > img {
            width: 100%;
            height: auto;
        }
    }
`

export const CampListInfo = styled.div`
    display: inline-block;
    position: absolute;
    text-align: left;
    left: 34%;
    top: 8%;
    margin-right: 20px;
    
    @media (max-width: 1440px) {
        position: static;
        text-align: center;
        left: auto;
        top: auto;
    }

    h3 {
        font-size: 25px;
        font-family: 'yg-jalnan';
        margin-bottom: 25px;
    }
    h3:hover {
        text-decoration: underline;
        text-shadow: 0.3px 0.3px;
    }
    .lineIntro {
        font-family: 'S-CoreDream-3Light';
        margin-bottom: 10px;
        font-size: 17px;
    }
    .intro {
        font-family: 'S-CoreDream-3Light';
        font-size: 15px;
        color: gray;
        margin-bottom: 10px;
    }
    .intro:hover {
        text-decoration: underline;
        text-shadow: 0.3px 0.3px;
    }
`

export const InfoAddr = styled.div`
    margin-bottom: 10px;
    & > ul {

    }

    & > ul > li {
        display: inline-block;
        padding: 15px 15px 15px 0px;
    }
`

export const Fac = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;

    & > ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    }
    & > ul > li {
        display: flex;
        padding: 12px;
    }
    & > ul > li > span {
        display: flex;
        color: #5faf90;
        font-size: 17px;
    }

    & > ul > li > p {
        font-family: 'yg-jalnan';
    }
`
