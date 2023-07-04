import { useState } from "react";
import * as Styled from "./style/Login.module"
import { useNavigate } from "react-router-dom";

function Login(){
    const [userId,setUserId] = useState("");
    const [userPw,setUserPw] = useState("");

    const navigate = useNavigate();

    const checkLogin = () =>{
        if(userId === "0409" && userPw === "1234"){
            sessionStorage.setItem("isLogin",true);
            navigate("/");
        }else{
            setUserId("");
            setUserPw("");
        }
    }
    return(
        <>
          <Styled.LoginWarp>
            <h6 onClick={()=>navigate("/")}>CAMPICK</h6>
            <Styled.LoginTable>
              <tbody>
                <tr>
                <td width="80px">아이디</td>
                <td width="300px">
                    <input value={userId} onChange={e=>setUserId(e.target.value)} type="text" autoFocus/>
                </td>
                </tr>
                <tr>
                <td>비밀번호</td>
                <td>
                    <input value={userPw} onChange={ e =>setUserPw(e.target.value)} type="password" />
                </td>
                </tr>
                <tr>
                <td>
                    <button onClick={()=>checkLogin()}>로그인</button>
                </td>
                <td>
                    <button onClick={()=>navigate("/regist")}>회원가입</button>
                </td>
                </tr>
              </tbody>
            </Styled.LoginTable>
          </Styled.LoginWarp>  
        </>
    )
}

export default Login;