import { useState } from "react";
import * as Styled from "./style/Header.module";
import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate = useNavigate();
  const [selectTap,setSelectTap] = useState(0);

  const isLogin = sessionStorage.getItem("isLogin");

  const mainNav = [
    {name : "캠핑장 찾기"},
    {name : "마이페이지"},
    {name : "게시판"}
  ];

  const checkLogin = () =>{
    if(isLogin){
      sessionStorage.removeItem("isLogin");
      navigate("/");
    }else{
      navigate("/Login");
    }
  }

  const navHandler = (index) =>{

    setSelectTap(index);

    if(index === 0){
      navigate("/");
    }else if(index === 1){
      // 마이페이지 이동
      navigate("/");
    }else{
      // 게시판으로 이동
      navigate("/");
    }
  }
    return(
      <Styled.MainHeader>
        <Styled.LogoHeader>
          <h6 onClick={()=>navigate("/")}>CAMPICK</h6>
        </Styled.LogoHeader>
        <Styled.NavHeader>
          <ul>
            {mainNav.map((data,index)=>(
              <li className={index === selectTap ? "active" : "passive"} 
                onClick={()=>navHandler(index)} 
                key={index}>
                  
                {data.name}
              </li>
            ))}
            <li onClick={()=>checkLogin()}>
              {isLogin? "로그아웃" : "로그인"}
            </li>
          </ul>
        </Styled.NavHeader>
      </Styled.MainHeader>
    );
}

export default Header;