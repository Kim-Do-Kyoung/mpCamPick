import axios from "axios";

export const getSearchData = (props) =>{
    if(props === ""){
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=9&pageNo=1&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json`)
        .then(res =>{
            return res;
          navigate('/CampList',
             {state: res.data.response.body})
        })
      }else{
        axios.get(`https://apis.data.go.kr/B551011/GoCamping/searchList?numOfRows=9&pageNo=1&MobileOS=etc&MobileApp=app&serviceKey=Z%2BgWArWZD50zyi3NvL6uXYpXwO5i%2FC2covIbLqCRvB7Ovz3pdMwSiDYnxbkE9R9v8VCaHg9Q5MwUG4WzyZMA9Q%3D%3D&_type=json&keyword=${props}`)
        .then(res =>{
            return res;
            Navigate('/CampList',
             {state: res.data.response.body})
        })
      }
}