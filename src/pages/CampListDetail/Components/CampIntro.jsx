import * as Styled from "../style/CampListDetail.module"
import React  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../../source/image/angle-left-solid.svg"
import arrowRight from "../../../source/image/angle-right-solid.svg"

function CampIntro(props){
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: (
          <button>
            <img src={arrowLeft} alt="prev" style={{height:"20px"}} />
          </button>
        ),
        nextArrow: (
          <button>
            <img src={arrowRight} alt="next" style={{height:"20px"}} />
          </button>
        ),
        className: "slider",
        slide: "slide"
      };
    return(
      <>
        <div>
          <Styled.CampIntroImg>
            <Slider {...settings}>
                {props.data.item?.map((data,index) =>(
                  <div className="slide" key={index}>
                    <img src={data.imageUrl} alt="이미지" onClick={()=>alert("확인")} style={{cursor:"pointer"}}/>
                  </div>
                ))}  
            </Slider>
          </Styled.CampIntroImg>
          <hr />
          <div>
            <p>
              {props.state.intro}
            </p>
          </div>
        </div>      
      </>  
    )
}

export default CampIntro