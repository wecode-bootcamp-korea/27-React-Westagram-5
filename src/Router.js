import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//정빈 컴포넌트
import LoginBin from './pages/hongjeongbin/LoginBin/LoginBin';
import MainBin from './pages/hongjeongbin/MainBin/MainBin';

//유진 컴포넌트
import LoginJin from './pages/hongyoujin/LoginJin/LoginJin';
import MainJin from './pages/hongyoujin/MainJin/MainJin';

//재호 컴포넌트
import LoginHo from './pages/kimjaeho/LoginHo/LoginHo';
import MainHo from './pages/kimjaeho/MainHo/MainHo';

//예슬 컴포넌트
import LoginSeul from './pages/kimyaeseul/LoginSeul/LoginSeul';
import MainSeul from './pages/kimyaeseul/MainSeul/MainSeul';

// 유량 컴포넌트
import LoginRyang from './pages/kimyuryang/LoginRyang/LoginRyang';
import MainRyang from './pages/kimyuryang/MainRyang/MainRyang';

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
