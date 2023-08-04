import styled from "styled-components";

export const MainHeader = styled.div`
    width: 100%;
    height: 250px;
    margin: 0 auto;
    background-color: #375959;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 150px;

`

export const LogoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #375959;
    & > h6 {
        height: 50px;
        font-size: 50px;
        color: white;
        font-family: 'yg-jalnan';
        cursor: pointer;
    }
`

export const NavHeader = styled.div`
    text-align: center;
    background-color: #375959;
    & > ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
    }
    
    & > ul > li {
        color: white;
        padding: 15px;
        font-size: 20px;
        font-family: 'GangwonEdu_OTFBoldA';
        cursor: pointer;
    }

    & > ul > li:hover {
        color: black;
    }

    .active {
        color: black;
    }

    .passive {

    }
`
