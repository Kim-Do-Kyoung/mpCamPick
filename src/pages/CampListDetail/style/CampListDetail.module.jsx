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

export const CampIntroWrap = styled.div`
    margin: 0 auto;
    width: 1200px;
`


export const CampIntroImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .slider {
    width: 1200px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  img{
    width: 98%;
    height: 300px;
  }
`;

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
`