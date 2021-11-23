import React, { useState } from 'react';
//import React from 'react';
import './LoginHo.scss';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function LoginHo() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-Ho');
  };
  const [idInput, setIdInput] = useState('');
  const [PWInput, setPassWordInput] = useState('');

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const handlePWInput = event => {
    setPassWordInput(event.target.value);
  };

  return (
    <div className="Loginho">
      <div className="my-box">
        <div className="img-box">
          <img src="https://media.vlpt.us/images/sugyinbrs/post/9466b002-01b3-4ca3-8a1f-f1a857ab800a/Westagram.PNG" />
        </div>
        <div className="wrap">
          <div className="login">
            <input
              onChange={handleIdInput}
              type="text,number,email"
              name=""
              id="id"
              placeholder="전화번호,사용자 이름 및 이메일 "
            />
            <input
              onChange={handlePWInput}
              type="password"
              name=""
              id="pw"
              placeholder="비밀번호"
            />
          </div>
          <div className="button-box">
            {idInput.includes('@') && PWInput.length >= 5 ? (
              <button
                type="button"
                className="btn"
                onClick={goToMain}
                disabled={false}
              >
                로그인
              </button>
            ) : (
              <button type="button" className="btn" disabled={true}>
                로그인
              </button>
            )}
          </div>

          <div className="sns">
            {/* <span> */}
            <a href="http://www.facebook.com">
              <i className="fab fa-facebook" />
              <span className="face">Facebook으로 로그인</span>
            </a>
            {/* </span> */}
            {/* <span className="face">Facebook으로 로그인</span> */}
          </div>
          <p className="forget">비밀번호를 잊으셧나요?</p>
        </div>
      </div>
      <div className="create">
        <span> 계정이 없으신가요? 가입하기</span>
      </div>
    </div>
  );
}
export default LoginHo;
