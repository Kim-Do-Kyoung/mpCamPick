import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Main/Header";
import * as Styled from "./style/CampList.module"
import Footer from "../../Main/Footer";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CampFacility from "../../Component/CampFacility";
import NoImg from "../../source/image/noimage.jpg"

function CampList(){
    const {state} = useLocation();
    const MAX_LENGTH = 100;
    const navigate = useNavigate();

    return(
        <>
          <Header />
          <Styled.CampListWrap>
            <div className="searchCount">
              총 {state.totalCount} 개의 검색결과
            </div>
              {state.items.item?.map((data,index) =>(
                <Styled.CampListItems key={index}>  
                  <Styled.CampListImage>
                    {data.firstImageUrl === "" ? 
                      <img src={NoImg} alt="No Img" onClick={()=>navigate("/CampListDetail",{state : data})} style={{cursor:"pointer"}} /> 
                      : <img src={data.firstImageUrl} alt="" onClick={()=>navigate("/CampListDetail",{state : data})} style={{cursor:"pointer"}} />}
                    
                  </Styled.CampListImage>
                  <Styled.CampListInfo>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h3 onClick={()=>navigate("/CampListDetail",{state : data})} style={{cursor:"pointer"}}>
                              {data.facltNm}
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="lineIntro">{data.lineIntro}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p onClick={()=>navigate("/CampListDetail",{state : data})} style={{cursor:"pointer"}} className="intro">
                              {data.intro <= MAX_LENGTH ? data.intro : data.intro.slice(0,MAX_LENGTH) + "..."}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Styled.InfoAddr>
                      <ul>
                        {data.addr1 ==="" ? null : <li>
                          <FontAwesomeIcon icon={faHouse} />
                          {data.addr1}
                        </li>}
                        
                        {data.tel === "" ? null : 
                        <li>
                          <FontAwesomeIcon icon={faPhone} />
                          {data.tel}
                        </li>}
                      </ul>
                    </Styled.InfoAddr>
                    <Styled.Fac>
                      <ul>
                          {data.sbrsCl.split(",").map((data2,index)=>(
                            <li key={index}>
                              {CampFacility(data2)}
                            </li>
                            ))}
                      </ul>
                    </Styled.Fac>
                  </Styled.CampListInfo>
                </Styled.CampListItems>
              ))}
              <div>
                페이징
              </div>
          </Styled.CampListWrap>
          <Footer />
        </>
    )
}

export default CampList;