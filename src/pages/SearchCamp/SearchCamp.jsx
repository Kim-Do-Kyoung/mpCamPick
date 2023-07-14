import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./style/SearchCamp.module"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SigunguList from "../../Component/SigunguList";

function SearchCamp(){

    const [keyWord,setKeyWord] = useState("");
    const [donm,setDonm] = useState("");
    const [sigunguNm,setSigunguNm] = useState("전체");
    const [thema,setThema] = useState("");

    const selectdonm = ["전체/도","서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];
    const [selectSigungu,setSelectSigungu] = useState([]);
    const navigate = useNavigate();
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
    const handleDonm = (e) => {
      setDonm(e.target.value);
      setSelectSigungu(SigunguList(e.target.value));
    };

    return(
        <>
          <Styled.SearchCampWrap>
            <Styled.SearchCampSubmit>
              <table>
                <tbody>
                  <tr>
                      <th>키워드 검색</th>
                      <td colSpan={2}>
                        <input type="text" value={keyWord} onChange={e=>setKeyWord(e.target.value)} autoFocus  />
                      </td>
                  </tr>
                  <tr>
                      <th>지역별검색</th>
                      <td style={{ width: "170px" }}>
                        <Form.Select
                          onChange={(e) => handleDonm(e)}
                          value={donm}
                          style={{ appearance: "none" }}
                        >
                          {selectdonm.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </td>
                      <td style={{ width: "170px" }}>
                        <Form.Select
                          onChange={(e) => setSigunguNm(e.target.value)}
                          value={sigunguNm}
                          style={{ appearance: "none" }}
                        >
                          {selectSigungu.map((item) => (
                            <option value={item} key={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                      </td>
                  </tr>
                  <tr>
                      <th>테마별</th>
                      <td>
                        <Form.Select type="text" value={thema} onChange={e => setThema(e.target.value)} style={{appearance:"none"}} >
                          <option></option>
                        </Form.Select>
                      </td>
                      <td>
                        <Button variant="success" onClick={()=> onSubmit()} style={{width:"50%"}} >검색</Button>
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