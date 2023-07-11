import styled from "styled-components";


export const SearchCampWrap = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    align-items: center;
    background-image: url("../../../../source/image/nature.jpg");
`

export const SearchCampSubmit = styled.div`
    width: 600px;
    height: 280px;
    border: 2px solid ;
    border-radius: 20px;

    th,td{
        font-family: 'Pretendard-Regular';
        padding: 30px 30px 30px 30px;
        font-size: 17px;
    }
    input{
        width: 100%;
        height: 100%;
        border: 0px;
        font-size: 20px;
        background-color: #eee;
        border-radius: 5px;
        padding: 7px;
        
    }
    select{
        width: 100%;
    }
`