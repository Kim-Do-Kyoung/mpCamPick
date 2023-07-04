import SearchCamp from "../pages/SearchCamp/SearchCamp";
import * as Styled from "./style/Contents.module"

function Contents(){
    return (
        <>
          <Styled.ContentsWrap>
            <Styled.MainSearch>
              <SearchCamp />
            </Styled.MainSearch>
          </Styled.ContentsWrap>
        </>
    );
}

export default Contents;