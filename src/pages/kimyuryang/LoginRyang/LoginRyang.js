import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginRyang/LoginRyang.scss';

function LoginRyang() {
  const [loginActive, setLoginActive] = useState(false);

  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const inputValue = idValue.includes('@') && pwValue.length > 4;
  const a = () => {
    return setLoginActive(inputValue);
  };

  const handleId = e => {
    const { value } = e.target;
    setIdValue(value);
  };

  const handlePw = e => {
    const { value } = e.target;
    setPwValue(value);
  };

  const navigate = useNavigate();

  const goToMain = () => {
    fetch('API주소', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if ('access_token' in result) {
          navigate('/main-ryang');
        } else {
          alert('dddddd');
        }
      });
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
                onKeyUp={a}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </label>
            <label for="password">
              <input
                id="password"
                type="password"
                onChange={handlePw}
                onKeyUp={a}
                placeholder="비밀번호"
              />
            </label>

            <button
              type="button"
              className={loginActive ? 'activeOn' : 'activeOff'}
              onClick={goToMain}
              disabled={loginActive ? false : true}
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
