import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import '../MainRyang/MainRyang.scss';

function MainRyang() {
  const [comment, setComment] = useState([]);
  const [submitComment, setSubmitComment] = useState('');

  const handleComment = e => {
    let { value } = e.target;
    setComment(value);
  };

  const updateComment = () => {
    let arrayCopy = [...comment, {...}];
    comment.unshift(submitComment);
    setSubmitComment(arrayCopy);
  }; 
  // concat 사용해보기 댓글 안에 id 내용 좋아요 실제 댓글 내용 인풋에 들어갈건데
  // 그냥 el 형태로 들어가면 찾기 힘듦 
  // 객체로 바꿔서 넣어보기 
  // 배열 안에 객체 추가 
  // {댓글} {userid }


  return (
    <div className="mainRyang">
      <Nav />
      <div className="feeds">
        <div className="feedsAccountArea">
          <img
            src="images/kimyuryang/otherprofile.png"
            className="otherProfile"
            alt="계정 사진"
            // 검색할 때 걸리는 검색어를 alt 속성으로 찾는다. 
          />
          <div className="userName">
            <span className="userNickName">y.raeng_</span>
            <p>・・・</p>
          </div>
        </div>

        <article className="photo" />

        <div className="feedsUnderArea">
          <div className="feedsUnderCommentArea">
            <i className="fas fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
            <i className="far fa-bookmark" />
          </div>

          <div className="feedsLikes">
            <i class="fas fa-user-circle" />
            <span className="feedsLikesAccount">anieworld</span>
            <p> 님</p>
            <span className="feedsLikesCount">외 10명</span>
            <p>이 좋아합니다.</p>
          </div>

          <div className="commentArea">
            <ul className="commentContent">
              <li className="commentId">0_z0</li>
              <li className="comment">무보정 실화?...</li>
            </ul>
            <ul className="commentPart">
              <li className="moreComment">더 보기</li>
              <li className="commentTime">42분 전</li>
              <li className="heartIcon">
                <i className="far fa-heart" />
              </li>
            </ul>
          </div>

          <div className="commentsRepleArea">
            <div className="commentRow">
              <input
                value = "newComment"
                className="newComment"
                name="newComment"
                onChange={handleComment}
                placeholder="댓글 달기..."
                //input의 value가 있고 없고 차이 
                //value를 추적해서 input 값을 컨트롤 할 수 있다. 
                //제어컴포넌트 react 공식 문서 form에 대해서 읽어보기 forms.html
              />
              <button className="commentSubmit" type="button" onClick={updateComment}>
                게시
              </button>
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
  );
}

export default MainRyang;
