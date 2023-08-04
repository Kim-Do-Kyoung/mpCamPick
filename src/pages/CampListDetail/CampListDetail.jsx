import { useLocation } from "react-router-dom"
import Header from "../../Main/Header"
import { useEffect, useState } from "react";
import CampIntro from "./Components/CampIntro";
import * as Styled from "./style/CampListDetail.module"
import axios from "axios";
import NoImg from "../../source/image/noimage.jpg"
import CampIntro2 from "./Components/CampIntro2";

function CampListDetail(){
    const {state} = useLocation();
    const [props,setProps] = useState("");

    useEffect(()=>{
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/imageList?numOfRows=50&pageNo=1&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json&contentId=${state.contentId}`)
        .then(res =>{
            setProps(res.data.response.body.items);
        })
    },[state]);

    const campNav = [
        {name:"캠핑장 소개",contents:<CampIntro data={props} state={state} />},
        {name:"이용안내",contents:<CampIntro2 />},
        {name:"위치/주변정보",contents:"test3"},
        {name:"캠핑&여행후기",contents:"test4"},
        {name:"공지/이벤트",contents:"test5"}
    ];
    const [selectNav,setSelectNav] = useState(0);

    return(
        <>
          <Header />
          <Styled.CDLWarp>
            <Styled.CDLName>
                {state.facltNm}
            </Styled.CDLName>
            <Styled.CDLInfoWrap>
              <Styled.CDLImage>
                {state?.firstImageUrl === "" ?
                <img src={NoImg} alt="No Img" /> 
                : <img src={state.firstImageUrl} alt="이미지"/>}
              </Styled.CDLImage>
              <Styled.CDLInfo>
                <table>
                  <tbody>
                    <tr>
                      <th>주소</th>
                      <td>{state.addr1}</td>
                    </tr>
                    <tr>
                      <th>문의처</th>
                      <td>{state.tel}</td>
                    </tr>
                    <tr>
                      <th>캠핑장 환경</th>
                      <td>{state.lctCl} / {state.facltDivNm}</td>
                    </tr>
                    <tr>
                      <th>캠핑장 유형</th>
                      <td>{state.induty}</td>
                    </tr>
                    <tr>
                      <th>운영기간</th>
                      <td>{state.operPdCl}</td>
                    </tr>
                    <tr>
                      <th>운영일</th>
                      <td>{state.operDeCl}</td>
                  </tr>
                  <tr>
                    <th>홈페이지</th>
                    <td><a href={state.homepage} target="blank">홈페이지 바로가기</a></td>
                  </tr>
                  <tr>
                    <th>예약방법</th>
                    <td>{state.resveCl}</td>
                  </tr>
                  <tr>
                    <th>주변이용가능시설</th>
                    <td>{state.posblFcltyCl}</td>
                  </tr>
                  </tbody>
                </table>
              </Styled.CDLInfo>
            </Styled.CDLInfoWrap>
            <Styled.CLDNav>
              {campNav.map((data,index)=>(
                <nav key={index} onClick={()=>setSelectNav(index)} className={selectNav === index ? "focusmenu":"submenu"} >
                    {data.name}
                </nav>
              ))}
            </Styled.CLDNav>
            <div>
              {campNav[selectNav].contents}
            </div>
          </Styled.CDLWarp>
        </>
    )
}

export default CampListDetail