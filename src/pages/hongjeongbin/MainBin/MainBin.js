import React from 'react';
import './MainBin.scss';
import Nav from '../../../components/Nav/Nav';

function MainBin() {
  return (
    <div className="main">
      <Nav />
      <div id="mainContainer">
        {/* 개인 nav코드 삭제 */}

        <main id="mainPage" />

        <div id="feeds">
          <div className="feedsHeader">
            <img
              src="/images/hongjeongbin/user-icon.jpg"
              className="feedsHeaderIcon"
            />
            <span className="feedsHeaderUserName">bin_123</span>
          </div>

          <article className="feedsArticle" />
          <img
            src="/images/hongjeongbin/feeds-image.jpg"
            className="feedsArticleImage"
          />

          <div className="feedsComment" />
          <img src="/images/hongjeongbin/heart.png" class="feedCommentHeart" />

          <div className="feedsTextLike">
            <img
              src="/images/hongjeongbin/user-icon.jpg"
              className="feedsTextIcon"
            />
            <span className="feedsTextNomal">
              <span className="feedsTextBold">hong_123</span>님
              <span className="feedsTextBold">외 10명</span>이 좋아합니다.
            </span>
          </div>

          <div className="feedsText">이 건축물은...</div>
          <ul className="commentsList" />
          <div className="commentSection">
            <input
              type="text"
              className="inputFeedsComment"
              placeholder="댓글 달기..."
            />
            <span>
              <button className="enterFeedsComment">게시</button>
            </span>
          </div>
        </div>

        <div id="FixedrightSection">
          <div className="rightSection">
            <div className="rightSectionLoginUser">
              <img
                src="/images/hongjeongbin/user-icon.jpg"
                className="rightSectionLoginUserIcon"
              />
              <span className="rightSectionLoginUserId">bin_123</span>
            </div>

            <div className="rightSectionStoryContainer">
              <div className="rightSectionStory">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="rightSectionStoryIcon"
                />
                <span className="rightSectionStoryId">hello_123</span>
              </div>

              <div className="rightSectionStory ">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="rightSectionStoryIcon"
                />
                <span className="rightSectionStoryId">he__llo_45</span>
              </div>

              <div className="rightSectionStory">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="rightSectionStoryIcon"
                />
                <span className="rightSectionStoryId">hello0012</span>
              </div>

              <div className="rightSectionStory">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="rightSectionStoryIcon"
                />
                <span className="rightSectionStoryId">h_ii_123</span>
              </div>

              <div className="rightSectionStory">
                <img
                  src="/images/hongjeongbin/user-icon.jpg"
                  className="rightSectionStoryIcon"
                />
                <span className="rightSectionStoryId">hello_123__</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBin;
