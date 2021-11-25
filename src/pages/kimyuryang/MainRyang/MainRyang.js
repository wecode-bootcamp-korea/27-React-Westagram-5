import React, { useState } from 'react';
import '../MainRyang/MainRyang.scss';
import Nav from '../../../components/Nav/Nav';

function MainRyang() {
  const [comment, setComment] = useState([]);
  const [submitComment, setSubmitComment] = useState('');
  const [submitHeart, setSubmitHeart] = useState(<i class="far fa-heart" />);

  const handleComment = e => {
    const { value } = e.target;
    setComment(value);
  };

  return (
    <div class="mainRyang">
      <Nav />
      <div class="feeds">
        <div class="feedsAccountArea">
          <img
            src="image/kimyurynag/otherprofile.png"
            className="otherProfile"
            alt="계정 사진"
          />
          <div class="userName">
            <span class="userNickName">y.raeng_</span>
            <p>・・・</p>
          </div>
        </div>

        <article class="photo" />

        <div class="feedsUnderArea">
          <div class="feedsUnderCommentArea">
            <i class="fas fa-heart" />
            <i class="far fa-comment" />
            <i class="far fa-paper-plane" />
            <i class="far fa-bookmark" />
          </div>

          <div class="feedsLikes">
            <i class="fas fa-user-circle" />
            <span class="feedsLikesAccount">anieworld</span>
            <p> 님</p>
            <span class="feedsLikesCount">외 10명</span>
            <p>이 좋아합니다.</p>
          </div>

          <div class="commentArea">
            <ul class="commentContent">
              <li class="commentId">0_z0</li>
              <li class="comment">무보정 실화?...</li>
            </ul>
            <ul class="commentPart2">
              <li class="moreComment">더 보기</li>
              <li class="commentTime">42분 전</li>
              <li class="heartIcon">
                <i class="far fa-heart" />
              </li>
            </ul>
          </div>

          <div class="commentsRepleArea">
            <div class="commentRow">
              <input
                id="newComment"
                name="newComment"
                onChange={handleComment}
                placeholder="댓글 달기..."
              />
              <button
                id="commentSubmit"
                type="button"
                onClick={() => {
                  let arrayCopy = [...comment];
                  comment.unshift(submitComment);
                  setComment(arrayCopy);
                }}
              >
                게시
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mainRightArea">
        <div class="myAccount">
          <ul class="myAccountArea">
            <li class="myAccountImage" />
            <li class="myAccountId">RyangO_O</li>
            <li class="myAccountIntroduce">27기 위코더</li>
          </ul>
        </div>

        <div class="mainRightStories">
          <div class="storiesProfile">
            <ul class="storiesUl1">
              <li>스토리</li>
              <li class="storiesMoreProfile">모두보기</li>
            </ul>

            <ul class="storiesUl2">
              <li class="storiesPhoto" />
              <li class="storiesId">_Help</li>
              <li class="storiesTime">16분 전</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRyang;
