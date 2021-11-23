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
              placeholder="검색"
              className="Nav__bar__header__search__input"
            />
          </div>
        </header>
        <nav className="Nav__bar__menu">
          <div className="Nav__bar__menu__icons">
            <i className="fas fa-ome-lg-alt" />
            <i className="fal fa-aper-plane" />
            <i className="fal fa-lus-square" />
            <i className="fal fa-compass" />
            <i className="fal fa-heart" />
            <img
            //src="/images/hongyoujin/profile_image.jpg"
            //className="Nav__bar__menu__icons__img"
            //alt="profileImage"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Nav;
