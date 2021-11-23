import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginRyang/LginRyang.scss';

function LoginRyang() {
  const Navigate = useNavigate();
  const goToMain = () => {
    Navigate('/MainRyag.js');
  };

  const [loginActive, setLoginActive] = useState('');

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const activeLoginBtn = idValue === '' || pwValue === '';
  const inputValue = idValue.includes('@') && pwValue.length > 4;
  const activeLoginBtn = () => {
    return setLoginActive(inputValue);
  };

  const handleId = e => {
    const { value } = e.target;
    setIdInput(value);
  };

  const handlePw = e => {
    const { value } = e.target;
    setPwInput(value);
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="logoSection">
          <h1>westagram</h1>
        </div>
        <section className="loginForm">
          <form name="loginInAction" action="login.js" method="post">
            <label for="id">
              <input
                id="id"
                type="text"
                onChange={handleId}
                onKeyUp
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </label>
            <label for="password">
              <input
                id="password"
                type="password"
                Onchange={handlePw}
                onKeyUp
                placeholder="비밀번호"
              />
            </label>

            <button
              type="submit"
              className="loginBtn"
              onClick={goToMain}
              disabled={activeLoginBtn ? true : false} 
              fectch
            >
              로그인
            </button>
          </form>
        </section>
        <section className="forgetIdSection">
          <span className="forgetId"> 비밀번호를 잊으셨나요? </span>
        </section>
      </div>
    </div>
  );
}

export default LoginRyang;
