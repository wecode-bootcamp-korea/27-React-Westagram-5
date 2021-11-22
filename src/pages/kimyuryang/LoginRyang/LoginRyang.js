import React, { useState } from 'react';
import './LoginRyang.scss';

function LoginRyang() {
  const [id, setId] = useState('false');
  const [password, setpassword] = useState('false');

  const clickEvent = () => {
    setId();
    setPassword();
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="logoSection">
          <h1>westagram</h1>
        </div>
        <section classNasme="loginForm">
          <form name="loginInAction" action="login.js" method="post">
            <label for="id">
              <input
                id="id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </label>
            <label for="password">
              <input id="password" type="password" placeholder="비밀번호" />
            </label>
            <button>로그인 ClassName="loginBtn" onChange={loginChange}</button>
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
