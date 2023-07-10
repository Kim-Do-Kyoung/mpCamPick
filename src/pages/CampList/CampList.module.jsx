import styled from "styled-components";

export const CampListWrap = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    .searchCount{
        text-align: left;
        font-size: 30px;
        padding: 30px;
        font-family: 'yg-jalnan';
        margin-left: 8%;
    }
`

export const CampListItems = styled.div`
    width: 1200px;
    height: 300px;
    display: inline-block;
    background-color: #eee;
    padding: 20px;
    margin-bottom: 50px;
    position: relative;
`
export const CampListImage = styled.div`
    display: inline-block;
    position: absolute;
    left: 2%;
    top: 5%;
    & > img{
        width: 360px;
        height: 270px;
    }
`

export const CampListInfo = styled.div`
    display: inline-block;
    position: absolute;
    text-align: left;
    left: 34%;
    top: 8%;
    h3{
        font-size: 25px;
        font-family: 'yg-jalnan';
        margin-bottom: 30px;
    }
    h3:hover{
        text-decoration: underline;
        text-shadow: 0.3px 0.3px;
    }
    .lineIntro{
        font-family: 'S-CoreDream-3Light';
        margin-bottom: 10px;
        font-size: 17px;
    }
    .intro{
        font-family: 'S-CoreDream-3Light';
        font-size: 15px;
        color: gray;
        margin-bottom: 10px;
    }
    .intro:hover{
        text-decoration: underline;
        text-shadow: 0.3px 0.3px;
    }

`

export const InfoAddr = styled.div`
    margin-bottom: 10px;
    & > ul{

    }

    & > ul >li {
        display: inline-block;
        padding: 15px 15px 15px 0px;
    }
`

export const Fac = styled.div`
    width: 750px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;

    & > ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    & > ul > li{
        display: flex;
        padding: 20px;
    }
    & > ul > li > span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5faf90;
        font-size: 20px;
    }

    &  > ul > li > p{
        font-family: 'yg-jalnan';
    }
`