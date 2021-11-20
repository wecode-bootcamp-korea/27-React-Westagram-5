import React from 'react';
import './MainBin.scss';
import Nav from '../../../components/Nav/Nav';

function MainBin() {
  return (
    <div className="main">
      <Nav />
      <div id="all">
        {/* <nav id="navBar">
          <div className="navBarPackage">
            <div>
              <a>
                <img
                  src="/images/hongjeongbin/instagram.png"
                  className="navCamera"
                />
              </a>
              <a>
                <img
                  src="/images/hongjeongbin/logo.jpg"
                  className="navInstagram"
                />
              </a>
            </div>

            <div className="navIconPackage">
              <a>
                <img
                  src="/images/hongjeongbin/explore.png"
                  className="navExplore"
                />
                <img
                  src="/images/hongjeongbin/heart.png"
                  className="navHeart"
                />
                <img
                  src="/images/hongjeongbin/profile.png"
                  className="navProfile"
                />
              </a>
            </div>
          </div>
        </nav> */}

        <main id="mainPage" />

        <div id="feeds">
          <header>
            <div className="feedsHeader">
              <img
                src="/images/hongjeongbin/user-icon.jpg"
                className="headerIcon"
              />
              <span className="headerUserName">bin_123</span>
            </div>
          </header>

          <article className="article" />
          <img
            src="/images/hongjeongbin/feeds-image.jpg"
            className="articleImage"
          />

          <div className="articleComment" />
          <img src="/images/hongjeongbin/heart.png" class="commentHeart" />

          <div className="feedsLike">
            <img
              src="/images/hongjeongbin/user-icon.jpg"
              className="textIcon"
            />
            <span className="nomalText">
              <span className="boldText">hong_123</span>님{' '}
              <span className="boldText">외 10명</span>이 좋아합니다.
            </span>
          </div>

          <div className="feedsText">이 건축물은...</div>
          <ul className="commentsList" />
          <div className="commentSection">
            <input
              type="text"
              className="inputComment"
              placeholder="댓글 달기..."
            />
            <span>
              {' '}
              <button className="enterComment">게시</button>
            </span>
          </div>
        </div>

        <div id="FixedrightSection">
          <div className="rightSection">
            <div className="mainRightLoginUser">
              <img
                src="/images/hongjeongbin/user-icon.jpg"
                className="mainRightIcon"
              />
              <span className="mainRightUser">bin_123</span>
            </div>

            <div className="mainRightStory">
              <div className="story">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="storyIcon"
                />
                <span className="stryId">hello_123</span>
              </div>

              <div className="story">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="storyIcon"
                />
                <span className="stryId">he__llo_45</span>
              </div>

              <div className="story">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="storyIcon"
                />
                <span className="stryId">hello0012</span>
              </div>

              <div className="story">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="storyIcon"
                />
                <span className="stryId">h_ii_123</span>
              </div>

              <div className="story">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="storyIcon"
                />
                <span className="stryId">hello_123__</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBin;
