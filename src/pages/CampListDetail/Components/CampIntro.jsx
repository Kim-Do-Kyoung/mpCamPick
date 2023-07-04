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