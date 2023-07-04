import styled from "styled-components";

export const LoginWarp = styled.div`
    text-align: center;
    &>h6{
        font-size: 50px;
        font-family: 'yg-jalnan';
        cursor: pointer;
    }
`

export const LoginTable = styled.table`
    display: inline-flexbox;
    width: 500px;
    border: 1px solid black;

    &>tbody >tr{

    }

    & >tbody> tr > td{
        padding: 20px;
    }

    input{
        width: 100%;
        border: 1px solid black;
        
    }
    input:focus{
        outline: none;
    }
`