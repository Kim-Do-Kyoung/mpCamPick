import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Main/Header";
import * as Styled from "./style/CampList.module"
import Footer from "../../Main/Footer";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CampFacility from "../../Component/CampFacility";
import NoImg from "../../source/image/noimage.jpg"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function CampList() {
  const { state } = useLocation();
  const MAX_LENGTH = 100;
  const navigate = useNavigate();

  const keyWord = state.keyWord;
  const donm = state.donm;
  // const sigunguNm = state.sigunguNm;

  const [page, setPage] = useState(1);
  const [campData, setCampData] = useState([]);
  const [totalCount,setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    setIsLoading(true);

    if (keyWord === "") {
      if (donm === "전체/도") { /* 전체 검색일때 */
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=300&pageNo=${page}&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json`)
          .then(res => {
            console.log(res);
            setCampData(res.data.response.body.items.item);
            setTotalCount(res.data.response.body.totalCount);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          })
          .finally(()=>{
            setIsLoading(false);
          });
      } else { /* 시 선택 시 */
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=300&pageNo=${page}&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json`)
          .then(res => {
            let res2 = [];

            res.data.response.body.items.item?.forEach(data => {
              if (data.doNm === donm) {
                res2.push(data);
              }
            });
            console.log(res2);
            setCampData(res2);
            setTotalCount(res2.length);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          })
          .finally(()=>{
            setIsLoading(false);
          });
      }
    } else {
      axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=300&pageNo=${page}&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json&keyword=${keyWord}`)
        .then(res => {
          setCampData(res.data.response.body.items.item);
          setTotalCount(res.data.response.body.totalCount);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        })
        .finally(()=>{
          setIsLoading(false);
        });
    }

    console.log("campData >> ",campData);
  }, [page]);
  return(
    <>
      <Header />
      <Styled.CampListWrap>
        {isLoading ? (
          <Styled.LoadingMessage>
          <Styled.LoadingSpinner /> Loading ...
        </Styled.LoadingMessage>
        ) : (
          <>
            <div className="searchCount">
              총 {totalCount} 개의 검색결과
            </div>
              {campData?.map((data,index) =>(
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
          </>
        )}
        
      </Styled.CampListWrap>
      <Footer />
    </>
  )
}

export default CampList;
