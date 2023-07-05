import styled from "styled-components";

export const CDLName = styled.div`
    padding: 40px 80px;
    text-align: left;
    font-size: 50px;
    font-family: 'yg-jalnan';

`
export const CDLInfoWrap = styled.div`
    margin-bottom: 100px;
    text-align: center;
`
export const CDLImage = styled.div`
    margin-left: 80px;
    display: inline-flex;
    float: left;

    & > img {
        width: 600px;
    }
`
export const CDLInfo = styled.div`
    display: inline-block;
    &> table{
        width: 600px;
        height: 400px;
    }

    &> table > tbody > tr > th,td{
        padding: 14px;
    }
    
    &> table > tbody > tr > th{
        width: 130px;
        text-align: left;
        border-top: 1px solid red;
        border-bottom: 1px solid #eee;
        font-family: 'yg-jalnan';
        font-size: 13px;
    }
    &> table > tbody > tr > td{
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        width: 350px;
        font-family: 'S-CoreDream-3Light';
        font-size: 15px;
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
`


export const CampIntroImg = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  .slider {
    width: 1200px;
    height: 300px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slider img {
    width: 100%; /* Set the desired width */
    height: 270px; /* Maintain aspect ratio */
    margin-right: 10px;
  }

  .slide {
  }

  .prevBtn{
    color: blakc;
  }
`;

export const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

export const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;