import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginBin.scss';

function LoginBin() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main-Bin');
  };

  return (
    <div className="login">
      <div className="loginBox">
        <img alt="logo" src="/images/hongjeongbin/logo.jpg" className="logo" />

        <form className="loginForm">
          <div className="LoginIdPw">
            <input
              type="text"
              className="loginId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="loginPassword"
              placeholder="비밀번호"
            />
          </div>

          <button className="loginBtn" type="button" onClick={goToMain}>
            로그인
          </button>

          <a
            className="forgotPassword"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </div>
    </div>
  );
}

export default LoginBin;
