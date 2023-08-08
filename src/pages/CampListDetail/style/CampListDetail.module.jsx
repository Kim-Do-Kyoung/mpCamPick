import styled from "styled-components";
import {Modal} from "antd"

export const CDLWarp = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`

export const CDLName = styled.div`
    padding: 40px 80px;
    text-align: left;
    font-size: 50px;
    font-family: 'yg-jalnan';
    margin: 0 auto;

    @media (max-width: 1440px){
        font-size: 30px;
    }
`

export const CDLInfoWrap = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;

`

export const CDLImage = styled.div`
    display: inline-flex;
    & > img {
        width: 600px;
        height: 420px;
        margin-right: 30px;
    }

    @media (max-width: 1440px) {
        display: block;
        text-align: center;
        

        & > img {
            width: 80%;
            height: auto;
            margin: 0;
        }
    }
`

export const CDLInfo = styled.div`
    display: inline-block;
    width: 550px;
    &> table{
        width: 100%;
        height: 400px;
    }

    &> table > tbody > tr > th, td {
        padding: 14px;
    }
    
    &> table > tbody > tr > th {
        width: 130px;
        text-align: left;
        border-top: 1px solid red;
        border-bottom: 1px solid #eee;
        font-family: 'yg-jalnan';
        font-size: 13px;
    }
    &> table > tbody > tr > td {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        font-family: 'S-CoreDream-3Light';
        font-size: 15px;
    }

    @media (max-width: 1440px) {
        display: block;
        margin: 0 auto;
        text-align: center;
        width: 100%;

        & > table{
            width: 80%;
            margin: 0 auto;
        }

        td{
            width: 250px;
        }
    }
`

export const CLDNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & > nav{
        display: inline-block;
        padding: 25px 60px;
        cursor: pointer;
        font-family: 'S-CoreDream-3Light';
    }
    .focusmenu{
        background-color: #eee;
    }
    
    .submenu{

    }

    @media (max-width: 1440px){
        & > nav{
            padding: 5px 20px;
            font-size: 12px;
        }
    }
`

export const CampIntroWrap = styled.div`
    margin: 0 auto;
    width: 1200px;

    @media (max-width: 1440px){
        width: 80%;
    }
`

export const CampIntroImg = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    .slider {
        width: 1200px;
    }
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    img {
        max-width: 98%;
        height: 300px;
    }

    @media (max-width: 1440px){
        .slider{
            width: 300px;
            margin: 0 auto;
        }
    }
`

export const CampIntroIntro = styled.div`
    margin: 0 auto;

    & > p{
        font-size: 14px;
        font-family: 'S-CoreDream-3Light';
        line-height: 1.5;
        letter-spacing: 1.5px;
    }
`

export const CampIntroInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    & > h6{
        margin-bottom: 20px;
        font-size: 25px;
        font-family: 'yg-jalnan';
    }

    & > div{
        width: 100%;
        background-color: #eee;
        display: flex;
        align-items: center;
    }

    & > div > ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    & > div > ul > li{
        display: flex;
        padding: 30px;
    }
    & > div > ul > li > span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5faf90;
        margin-right: 5px;
        font-size: 20px;
    }

    & > div > ul > li > p{
        font-family: 'yg-jalnan';
    }

    @media(max-width:1440px){
        & > div > ul > li{
            padding :20px;
        }
    }

`
export const ModalDiv = styled.div`
    display: flex;
    max-width: 100%;
    max-height: 100%;
    justify-content: center;

    & > img {
        max-width: 100%;
        max-height: 100%;
    }
`

export const CustomModal = styled(Modal)`
    .ant-modal-content {
        padding: 0;
        background-color: transparent;
    }
    .ant-modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
`;