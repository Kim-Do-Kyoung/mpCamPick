import * as Styled from "../style/CampListDetail.module"
import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../../source/image/angle-left-solid.svg"
import arrowRight from "../../../source/image/angle-right-solid.svg"
import CampFacility from "../../../Component/CampFacility";
import {Modal} from "antd"

function CampIntro(props){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [img,setImg] = useState("");

    const showModal = (data) => {
        setIsModalOpen(true);
        setImg(data);
    };

    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );
  
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [slidesToScroll, setSlidesToScroll] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1440) {
                setSlidesToShow(3);
                setSlidesToScroll(3);
            } else {
                setSlidesToShow(1);
                setSlidesToScroll(1);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial setup

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        prevArrow: (
            <SlickButtonFix>
                <img src={arrowLeft} alt="prev" style={{ height: "20px" }} />
            </SlickButtonFix>
        ),
        nextArrow: (
            <SlickButtonFix>
                <img src={arrowRight} alt="next" style={{ height: "20px" }} />
            </SlickButtonFix>
        ),
        className: "slider",
        slide: "slide"
    };

    return(
      <>
        <Styled.CampIntroWrap>
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
            {props?.state.intro === "" ? null 
            : <hr style={{width:"100%",border:"1px solid black",marginTop:"20px",marginBottom:"20px"}} />}
          <Styled.CampIntroIntro>
            <p>
              {props.state.intro}
            </p>
          </Styled.CampIntroIntro>
            {props?.data === "" ? null
            : <hr style={{width:"100%",border:"1px solid black",marginTop:"20px",marginBottom:"20px"}} />}
          <Styled.CampIntroImg>
            <Slider {...settings}>
                {props.data.item?.map((data,index) =>(
                  <div className="slide" key={index}>
                    <img src={data.imageUrl} alt="이미지" onClick={()=>showModal(data)} style={{cursor:"pointer"}}/>
                  </div>
                ))}  
            </Slider>
          </Styled.CampIntroImg>
          
          <hr style={{width:"100%",border:"1px solid black",marginTop:"20px",marginBottom:"20px"}} />
          <Modal title={null} open={isModalOpen} onCancel={()=>setIsModalOpen(false)} footer={null} width={800}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={img.imageUrl}  style={{width:"800px"}} alt="no img"/>
            </div>
          </Modal>
        </Styled.CampIntroWrap>
      </>  
    )
}

export default CampIntro