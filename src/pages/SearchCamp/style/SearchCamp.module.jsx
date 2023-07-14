import styled from "styled-components";
import natureImage from "../../../source/image/nature.jpg";

export const SearchCampWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 780px;
    background-size: cover;
    background-image: url(${natureImage});
    background-repeat: no-repeat;
    background-position: center;
`

export const SearchCampSubmit = styled.div`
    width: 500px;
    height: 280px;
    border: 2px solid #375959;
    border-radius: 20px;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0.5);
    justify-items: center;

    & > table > tbody > tr > th{
        font-family: 'Pretendard-Regular';
        padding: 30px;
        font-size: 17px;
        color: black;
    }
    & > table > tbody > tr > td{
        padding: 7px;
    }
    & > table > tbody > tr > td > input{
        width: 100%;
        height: 33px;
        font-size: 20px;
        background-color: white;
        border-radius: 5px;
        padding: 7px;
        outline: 1px solid;
        
    }
    & > table > tbody > tr > td > select{
        width: 100%;
        height: 33px;
        padding: 7px;
        border-radius: 5px;
        background-color: white;
    }
`