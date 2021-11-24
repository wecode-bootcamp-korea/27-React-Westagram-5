import React from 'react';
// import Nav from './components/Nav/Nav';

function MainRyang() {
  return (
    <div class="mainRyang">
      <div class="feeds">
        <div class="feedsAccountArea">
          <img src="images/kimyuryang/otherprofile.png" alt="계정 사진" />
          <span class="userName">
            <p>y.raeng_</p>
            <p>・・・</p>
          </span>
        </div>

        <article class="photo" />

        <div class="feedsUnderArea">
          <div class="feedsUnderCommentArea">
            <div class="feedsUnderAreaIcons">
              <i class="fas fa-heart" />
              <i class="far fa-comment" />
              <i class="far fa-paper-plane" />
              <i class="far fa-bookmark" />
            </div>

            <div class="feedsLikes">
              <i class="fas fa-user-circle" />
              <span id="feedsLikesAccount">anieworld</span>
              <p> 님</p>
              <span id="feedsLikesCount">외 10명</span>
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
          </div>

          <div class="commentsRepleArea">
            <div id="commentRow">
              <textarea
                id="newComment"
                name="newComment"
                cols="50"
                rows="2"
                placeholder="댓글 달기..."
              />
              <button id="commentSubmit" type="button" class="deactivated">
                게시
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRyang;
