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
        <Route path="/login-ryang" element={<LoginRyang />} />
        <Route path="/main-ryang" element={<MainRyang />} />
        {/* //유진 */}
        <Route path="/login-jin" element={<LoginJin />} />
        <Route path="/main-jin" element={<MainJin />} />
        {/* //예슬 */}
        <Route path="/login-seul" element={<LoginSeul />} />
        <Route path="/main-seul" element={<MainSeul />} />
        {/* //재호 */}
        <Route path="/login-ho" element={<LoginHo />} />
        <Route path="/main-ho" element={<MainHo />} />
        {/* //정빈 */}
        <Route path="/login-bin" element={<LoginBin />} />
        <Route path="/main-bin" element={<MainBin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
