import styled, { keyframes } from "styled-components";


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
        :hover {
            text-decoration: underline;
            text-shadow: 0.3px 0.3px;
        }
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

        :hover{
            text-decoration: underline;
            text-shadow: 0.3px 0.3px; 
        }
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



const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingMessage = styled.div`
    font-size: 30px;
    margin: 30px;
    font-family: 'yg-jalnan';
`;

export const LoadingSpinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #767676;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 70px;

  li {
    padding: 10px 10px;

    & > a {
      color: black;
      transition: color 0.3s ease;

      &:hover {
        color: red;
      }
    }

    &.active {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: red;
    }

    &.disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }

  .paginationItem {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
  }

  .paginationActiveItem {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
  }

  .paginationDisabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;