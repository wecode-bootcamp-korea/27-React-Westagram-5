/* eslint-disable */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import logo from "./logo.svg";
import '../LoginJin/LoginJin.scss';

function LoginJin() {
  return (
    <div className="Login">
      <Aside />
      <Article />
    </div>
  );
}

function Aside() {
  return (
    <aside className="Login__Aside">
      <div className="Login__Aside__phone-screen">
        <img
          className="Login__Aside__phone-screen__images"
          src="images/hongyoujin/imgs01.jpeg"
          alt="images"
        />
      </div>
    </aside>
  );
}

function Article() {
  return (
    <article className="Login__Article">
      <LoginBox />
      <Join />
      <Download />
    </article>
  );
}

function LoginBox() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleIdInput = event => {
    setIdValue(event.target.value);
  };
  const handlePwInput = event => {
    setPwValue(event.target.value);
  };
  const Navigate = useNavigate();

  const goToMain = () => {
    Navigate('/main-jin');
  };
  return (
    <div className="Login__Article__login-box">
      <h1 className="Login__Article__login-box__logo">Westagram</h1>
      <form method="post" className="Login__Article__login-box__form">
        <input
          className="Login__Article__login-box__form__input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          className="Login__Article__login-box__form__input"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />
        <button
          type="submit"
          className={
            idValue.includes('@') && pwValue.length > 4
              ? 'Login__Article__login-box__form__btnOn'
              : 'Login__Article__login-box__form__btnOff'
          }
          onClick={goToMain}
          disabled={idValue.includes('@') && pwValue.length > 4 ? false : true}
        >
          로그인
        </button>
      </form>
      <div className="Login__Article__login-box__option">
        <div className="Login__Article__login-box__option__line" />
        <p className="Login__Article__login-box__option__or">또는</p>
      </div>
      <div className="Login__Article__login-box__facebook">
        <button className="Login__Article__login-box__facebook__btn">
          <i className="fab  fa-facebook-square Login__Article__login-box__facebook__btn__icon" />
          <span className="Login__Article__login-box__facebook__btn__text">
            Facebook으로 로그인
          </span>
        </button>
        <p className="Login__Article__login-box__facebook__if-forget">
          비밀번호를 잊으셨나요?
        </p>
      </div>
    </div>
  );
}
function Join() {
  return (
    <div className="Login__Article__join">
      <p className="Login__Article__join__question">계정이 없으신가요?</p>
      {/* <a href="#"> */}
      <span className="Login__Article__join__link">가입하기</span>
      {/* </a> */}
    </div>
  );
}
function Download() {
  return (
    <div className="Login__Article__download">
      <p className="Login__Article__download__text">앱을 다운로드하세요.</p>
      <div className="Login__Article__download__buttons">
        <button className="Login__Article__download__buttons__btn  apple-btn">
          <i className="fab fa-apple Login__Article__download__buttons__btn__icon" />
          <div className="Login__Article__download__buttons__btn__text-box text-apple">
            <p className="Login__Article__download__buttons__btn__text-box__text">
              App Store에서
            </p>
            <p className="Login__Article__download__buttons__btn__text-box__text">
              다운로드 하기
            </p>
          </div>
        </button>
        <button className="Login__Article__download__buttons__btn  android-btn">
          <i className="fab fa-google-play Login__Article__download__buttons__btn__icon" />
          <div className="Login__Article__download__buttons__btn__text-box text-android">
            <p className="Login__Article__download__buttons__btn__text-box__text">
              Google Play에서
            </p>
            <p className="Login__Article__download__buttons__btn__text-box__text">
              다운로드 하기
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default LoginJin;
