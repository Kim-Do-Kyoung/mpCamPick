import styled from "styled-components";

export const CDLName = styled.div`
    padding: 40px 80px;
    text-align: left;
    font-size: 50px;
    font-family: 'yg-jalnan';

`
export const CDLInfoWrap = styled.div`
    margin-bottom: 100px;
`
export const CDLImage = styled.div`
    margin-left: 80px;
    display: inline-flex;

    & > img {
        width: 600px;
    }
`
export const CDLInfo = styled.div`
    display: inline-block;

    &> table > tbody > tr > th,td{
        padding: 14px;
    }
`



export const CLDNav = styled.div`
    text-align: center;
    margin-bottom: 20px;
    & > nav{
        display: inline-block;
        padding: 20px;
        cursor: pointer;
    }
    .focusmenu{
        background-color: #eee;
    }
    
    .submenu{

    }
`


export const CampIntroImg = styled.div`

    text-align: center;

    & > img{
        padding: 5px 5px;
        width: 360px;
        height: 240px;
    }
`