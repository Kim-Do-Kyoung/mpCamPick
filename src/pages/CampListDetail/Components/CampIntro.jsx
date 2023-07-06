import * as Styled from "../style/CampListDetail.module"
import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../../source/image/angle-left-solid.svg"
import arrowRight from "../../../source/image/angle-right-solid.svg"
import CampFacility from "../../../Component/CampFacility";

function CampIntro(props){
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: (
          <SlickButtonFix>
            <img src={arrowLeft} alt="prev" style={{height:"20px"}} />
          </SlickButtonFix>
        ),
        nextArrow: (
          <SlickButtonFix>
            <img src={arrowRight} alt="next" style={{height:"20px"}} />
          </SlickButtonFix>
        ),
        className: "slider",
        slide: "slide"
    };

    console.log(props);
    return(
      <>
        <Styled.CampIntroWrap>
          <Styled.CampIntroImg>
            <Slider {...settings}>
                {props.data.item?.map((data,index) =>(
                  <div className="slide" key={index}>
                    <img src={data.imageUrl} alt="이미지" onClick={()=>alert("확인")} style={{cursor:"pointer"}}/>
                  </div>
                ))}  
            </Slider>
          </Styled.CampIntroImg>
          <hr style={{width:"1200px",border:"1px solid black",marginTop:"20px",marginBottom:"20px"}} />
          <Styled.CampIntroIntro>
            <p>
              {props.state.intro}
            </p>
          </Styled.CampIntroIntro>
          {props.state.intro === "" ? null 
          : <hr style={{width:"1200px",border:"1px solid black",marginTop:"20px",marginBottom:"20px"}} />}
          <Styled.CampIntroInfo>
            <h6>캠핑장 시설정보</h6>
            <div>
              <ul>
                {props.state.sbrsCl?.split(",").map((data,index)=>(
                    <li key={index}>
                    {CampFacility(data)}
                </li>
                ))}
              </ul>
            </div>
          </Styled.CampIntroInfo>
          <hr style={{width:"1200px",border:"1px solid black",marginTop:"20px",marginBottom:"20px"}} />
          <div>
            <h6>기타 주요 시설</h6>
            <table>
              <tbody>
                <tr>
                  <th>주요시설</th>
                  <td>
                    
                  </td>
                </tr>
                <tr>
                  <th>기타 정보</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>기타 주변이용가능시설</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>바닥형태 (단위:면)</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>사이트 크기</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>글램핑 내부시설</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>캠핑장비대여</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>화로대</th>
                  <td>

                  </td>
                </tr>
                <tr>
                  <th>안전시설현황</th>
                  <td>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Styled.CampIntroWrap>      
      </>  
    )
}

export default CampIntro