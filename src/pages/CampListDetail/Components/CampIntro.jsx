import * as Styled from "../style/CampListDetail.module"

function CampIntro(props){
    console.log(props)
    return(
      <>
        <div>
          <Styled.CampIntroImg>
            {props.data.item?.map((data,index) =>(
              <img src={data.imageUrl} alt="이미지" key={index}/>
            ))}  
          </Styled.CampIntroImg>    
        </div>      
      </>  
    )
}

export default CampIntro