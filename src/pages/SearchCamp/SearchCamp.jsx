import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style/SearchCamp.module"

function SearchCamp(){
    const [keyWord,setKeyWord] = useState("");
    const [donm,setDonm] = useState("");
    const [sigunguNm,setSigunguNm] = useState("");
    const [thema,setThema] = useState("");

    const navigate = useNavigate();

    const selectdonm = ["전체"];
    const selectsigunguNm = ["전체"];


    const onSubmit = () =>{
      if(keyWord === ""){
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=9&pageNo=1&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json`)
        .then(res =>{
          navigate('/CampList',
             {state: res.data.response.body})
        })
      }else{
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=9&pageNo=1&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json&keyword=${keyWord}`)
        .then(res =>{
            navigate('/CampList',
             {state: res.data.response.body})
        })
      }
    }
    return(
        <>
          <Styled.SearchCampWrap>
            <Styled.SearchCampSubmit>
              <table>
                <tbody>
                  <tr>
                      <th>키워드 검색</th>
                      <td colSpan={2}>
                        <input type="text" value={keyWord} onChange={e=>setKeyWord(e.target.value)} autoFocus />
                      </td>
                  </tr>
                  <tr>
                      <th>지역별검색</th>
                      <td style={{width:"170px"}}>
                        <select onChange={e => setDonm(e.target.value)} value={donm}>
                          {selectdonm.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td style={{width:"170px"}}>
                      <select onChange={e => setSigunguNm(e.target.value)} value={sigunguNm}>
                          {selectsigunguNm.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </td>
                  </tr>
                  <tr>
                      <th>테마별</th>
                      <td>
                        <input type="text" value={thema} onChange={e => setThema(e.target.value)} />
                      </td>
                      <td>
                        <button onClick={()=> onSubmit()}>검색</button>
                      </td>
                  </tr>
                </tbody>
              </table>
            </Styled.SearchCampSubmit>
          </Styled.SearchCampWrap>          
        </>
    )
}

export default SearchCamp;