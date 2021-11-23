import React, { useState } from 'react';
import './LoginSeul.scss';
import { Link } from 'react-router-dom';

function LoginSeul() {
  const [inputIdText, setinputIdText] = useState('');
  const [inputPwText, setinputPwText] = useState('');

  const handleIdInput = e => {
    setinputIdText(e.target.value);
  };

  const handlePwInput = e => {
    setinputPwText(e.target.value);
  };

  return (
    <div className="loginContainer">
      <div className="LoginSeul">
        <h1>westagram</h1>
        <input
          id="id"
          type="text"
          placeholder="전화번호 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          value={inputIdText}
        />

        <input
          id="pw"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
          value={inputPwText}
        />

        <input
          className={
            inputIdText.includes('@') && inputPwText.length >= 5
              ? 'activeButton'
              : 'unactiveButton'
          }
          disabled
          type="button"
          value="로그인"
        />
        <div className="passwordFind">
          <i className="fab fa-facebook-square fa-2x" />
          <span className="facebooklink">Facebook으로 로그인</span>
          <div className="passwordFind">비밀번호를 잊으셨나요? </div>
        </div>
        <Link to="/main-seul" />
      </div>
    </div>
  );
}

export default LoginSeul;
