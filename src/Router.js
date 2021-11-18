import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 유량 컴포넌트
import LoginRyang from './pages/kimyuryang/Login/Login';
import MainRyang from './pages/kimyuryang/Main/Main';

//유진 컴포넌트
import LoginJin from './pages/hongyoujin/Login/Login';
import MainJin from './pages/hongyoujin/Main/Main';

//예슬 컴포넌트
import LoginSeul from './pages/kimyaeseul/Login/Login';
import MainSeul from './pages/kimyaeseul/Main/Main';

//재호 컴포넌트
import LoginHo from './pages/kimjaeho/Login/Login';
import MainHo from './pages/kimjaeho/Main/Main';

//정빈 컴포넌트
import LoginBin from './pages/hongjeongbin/Login/Login';
import MainBin from './pages/hongjeongbin/Main/Main';

// router path

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //유량 */}
        <Route path="/loginRyang" element={<LoginRyang />} />
        <Route path="/mainRyang" element={<MainRyang />} />
        {/* //유진 */}
        <Route path="/loginJin" element={<LoginJin />} />
        <Route path="/mainJin" element={<MainJin />} />
        {/* //예슬 */}
        <Route path="/loginSeul" element={<LoginSeul />} />
        <Route path="/mainSeul" element={<MainSeul />} />
        {/* //재호 */}
        <Route path="/loginHo" element={<LoginHo />} />
        <Route path="/mainHo" element={<MainHo />} />
        {/* //정빈 */}
        <Route path="/loginBin" element={<LoginBin />} />
        <Route path="/mainBin" element={<MainBin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
