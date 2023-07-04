import styled from "styled-components";

export const MainHeader = styled.div`
    width: 100%;
    height: 250px;
    background-color: #375959;
`

export const LogoHeader = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: center;
    & > h6{
        height: 50px;
        font-size: 50px;
        color: white;
        font-family: 'yg-jalnan';
        cursor: pointer;
    }
`

export const NavHeader = styled.div`
    text-align: center;
    & > ul{

    }
    & > ul > li{
        display: inline-flex;
        color: white;
        padding: 15px;
        font-size: 20px;
        font-family: 'GangwonEdu_OTFBoldA';
    }

    & > ul > li:hover{
        color: black;
        cursor: pointer;
    }

    .active{
        color: black;
    }

    .passive{
        
    }
`