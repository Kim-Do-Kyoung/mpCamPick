import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import { Reset } from "styled-reset";
import Login from "./pages/Login/Login";
import Regist from "./pages/Regist/Regist";
import CampList from "./pages/CampList/CampList";
import CampListDetail from "./pages/CampListDetail/CampListDetail";

function App() {
   return (
    <>
      <Reset />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/regist" element={ <Regist /> } />
          <Route path="/CampList" element={ <CampList /> } />
          <Route path="/CampListDetail" element={ <CampListDetail /> } />
          <Route path="*" element={ <Main /> } />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
