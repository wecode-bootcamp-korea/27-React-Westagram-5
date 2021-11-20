import React from 'react';
import '../Nav/Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__bar">
        <header className="Nav__bar__header">
          <div className="Nav__bar__header__logo">
            <h1>Westagram</h1>
          </div>
          <div className="Nav__bar__header__search">
            <input
              type="search"
              id="search"
              placeholder="검색"
              className="Nav__bar__header__search__input"
            />
          </div>
        </header>
        <nav className="Nav__bar__menu">
          <div className="Nav__bar__menu__icons">
            <i className="fas fa-home-lg-alt" />
            <i className="fal fa-paper-plane" />
            <i className="fal fa-plus-square" />
            <i className="fal fa-compass" />
            <i className="fal fa-heart" />
            <img
              src="/images/hongjeongbin/user-icon.jpg"
              className="Nav__bar__menu__icons__img"
              alt="navUserICON"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
