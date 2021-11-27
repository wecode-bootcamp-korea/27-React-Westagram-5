import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import '../MainRyang/MainRyang.scss';

function MainRyang() {
  const [commentInput, setCommentInput] = useState('');
  const [commentsInput, setCommentsInput] = useState([]);
  const handleComment = e => setCommentInput(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (commentInput === '') {
      return;
    }
    setCommentsInput('');
    setCommentInput(commentArray => [commentInput, ...commentArray]);
  };

  return (
    <div className="MainRyang">
      <Nav />
      <div className="feeds">
        <div className="feedsAccountArea">
          <img
            className="otherProfile"
            src="images/kimyuryang/otherprofile.png"
            alt="계정 사진"
          />
          <div className="userNameArea">
            <span className="userName">y.raeng_</span>
            <span className="moreUserInfo">...</span>
          </div>
        </div>
        <article className="photo" />
        <div className="feedsUnderArea">
          <div className="feedsUnderContentsArea">
            <span className="feedsUnderAreaIcons">
              <i className="fas fa-heart" />
              <i className="far fa-paper-plane" />
              <i className="far fa-bookmark" />
            </span>

            <div className="feedsLikes">
              <i className="fas fa-user-circle" />
              <span className="feedsLikesAccount">anieworld</span>
              <span className="feedsAccount"> 님</span>
              <span className="feedsLikesCount">
                외 {commentsInput.length} 명
              </span>
              <p>이 좋아합니다.</p>
            </div>

            <div className="commentArea">
              <ul className="commentContent">
                <li className="commentId">0_z0</li>
                <li className="comment">무보정 실화?...</li>
                <li className="heartIcon">
                  <i className="far fa-heart" />
                </li>
              </ul>
              <ul className="commentPart">
                <li className="moreComment">더 보기</li>
                <li className="commentTime">42분 전</li>
              </ul>
            </div>

            <div className="inputCommentArea">
              <div className="commentRow">
                <form onSubmit={handleSubmit} method="POST">
                  <labe for="newComent">
                    <input
                      value={commentInput}
                      className="newComment"
                      id="newComment"
                      type="text"
                      onChange={handleComment}
                      placeholder="댓글 달기..."
                    />
                    <button
                      className="commentButton"
                      type="button"
                      onClick={handleComment}
                    >
                      게시
                    </button>
                  </labe>
                </form> 
                <hr />
                <ul>
                  {commentsInput.map(item => (
                    <li key="index">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mainRightArea">
          <div className="myAccount">
            <ul className="myAccountArea">
              <li className="myAccountImage" />
              <li className="myAccountId">RyangO_O</li>
              <li className="myAccountIntroduce">27기 위코더</li>
            </ul>
          </div>

          <div className="mainRightStories">
            <div className="storiesProfile">
              <ul className="storiesUl1">
                <li>스토리</li>
                <li className="storiesMoreProfile">모두보기</li>
              </ul>

              <ul className="storiesUl2">
                <li className="storiesPhoto" />
                <li className="storiesId">_Help</li>
                <li className="storiesTime">16분 전</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRyang;
