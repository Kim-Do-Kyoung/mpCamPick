import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Main/Header";
import * as Styled from "./CampList.module"

function CampList(){
    const {state} = useLocation();
    const MAX_LENGTH = 45;
    const navigate = useNavigate();

    return(
        <>
          <Header />
          <Styled.CampListWrap>
            <div>
              총 {state.totalCount} 개의 검색결과
            </div>
              {state.items.item?.map((data,index) =>(
                <Styled.CampListItems key={index}>  
                  <Styled.CampListImage>
                    <img src={data.firstImageUrl} alt="" onClick={()=>navigate("/CampListDetail",{state : data})} style={{cursor:"pointer"}} />
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
                            <p>{data.lineIntro}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p onClick={()=>navigate("/CampListDetail",{state : data})} style={{cursor:"pointer"}}>
                              {data.intro <= MAX_LENGTH ? data.intro : data.intro.slice(0,MAX_LENGTH) + "..."}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <ul>
                        <li>{data.addr1}</li>
                        <li>{data.tel}</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                          {data.sbrsCl.split(",").map((data2,index)=>(
                            <li key={index}>
                              {data2}
                            </li>
                            ))}
                      </ul>
                    </div>
                  </Styled.CampListInfo>
                </Styled.CampListItems>
              ))}
          </Styled.CampListWrap>
        </>
    )
}

export default CampList;