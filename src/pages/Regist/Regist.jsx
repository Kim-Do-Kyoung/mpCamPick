import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Regist(){
    const [id,setId] = useState("");
    const [pw,setPw] = useState("");
    const [pwc,setPwc] = useState("");
    const [addr,setAddr] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNum,setPhoneNum] = useState("");

    const navigate = useNavigate();

    /*db연결 하면 유효성검사 할 예정*/
    const onSubmit = () =>{
        navigate("/login");
    }
    const onReset = () =>{
        setId("");
        setPw("");
        setPwc("");
        setAddr("");
        setEmail("");
        setPhoneNum("");
    }
    return(
        <>
          <div>
            <h6>CAMPICK</h6>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                    <td>ID</td>
                    <td>
                      <input type="text" value={id} onChange={e =>setId(e.target.value)} autoFocus />
                    </td>
                </tr>
                <tr>
                    <td>패스워드</td>
                    <td>
                    <input type="password" value={pw} onChange={e=>setPw(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>패스워드 확인</td>
                    <td>
                      <input type="password" value={pwc} onChange={e=>setPwc(e.target.value)}  />
                    </td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>
                      <input type="text" value={addr} onChange={e=>setAddr(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>
                      <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>연락처</td>
                    <td>
                      <input type="text" value={phoneNum} onChange={e=>setPhoneNum(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td><button onClick={()=>onSubmit()}>Submit</button></td>
                    <td><button onClick={()=>onReset()}>Reset</button></td>
                    <td><button onClick={()=>navigate("/Login")}>뒤로가기</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </>
    )
}

export default Regist;