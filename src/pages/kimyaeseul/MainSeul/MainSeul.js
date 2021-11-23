import React, { useState } from 'react';
import './MainSeul.scss';
import Nav from '../../../components/Nav/Nav';
// import { useNavigate } from 'react-router-dom';

function MainSeul() {
  return (
    <div classNameName="Main">
      <Nav />
      <div className="mainFeedContainer">
        <div className="mainFeed">
          <main className="mainSection">
            <div className="storyBoximage">
              <div className="uesr1">
                <img
                  alt="feed.img"
                  src="images/kimyaeseul/storyImg1.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed1Name">
                  <span>min_nayn3</span>
                </div>
              </div>

              <div className="user2">
                <img
                  alt="feed.img"
                  src="images/kimyaeseul/storyImg2.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed2Name">
                  <span>kha3lee__</span>
                </div>
              </div>

              <div className="user2">
                <img
                  alt="feed.img"
                  src="/images/kimyaeseul/storyImg3.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed2Name">
                  <span>__kha_3lee</span>
                </div>
              </div>

              <div className="user2">
                <img
                  alt="feed.img"
                  src="/images/kimyaeseul/storyImg4.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed2Name">
                  <span>qdinee777</span>
                </div>
              </div>

              <div className="user2">
                <img
                  alt="feed.img"
                  src="/images/kimyaeseul/storyImg5.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed2Name">
                  <span>munhongc</span>
                </div>
              </div>

              <div className="user2">
                <img
                  alt="feed.img"
                  src="/images/kimyaeseul/storyImg6.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed2Name">
                  <span>pizza_hate</span>
                </div>
              </div>

              <div className="user2">
                <img
                  alt="feed.img"
                  src="/images/kimyaeseul/storyImg7.jpg"
                  width="68px"
                  height="68px"
                />
                <div className="feed2Name">
                  <span>bona_lover37</span>
                </div>
              </div>
            </div>

            <div className="feedContainer">
              <div className="feedoftop">
                <img
                  alt="me.img"
                  src="images/kimyaeseul/userProfile.jpg"
                  width="40px"
                  height="40px"
                />
                <div className="userNickName">
                  <p>yes_eulk3</p>
                </div>
              </div>

              <div className="feedimg">
                <img
                  alt="kitchen.img"
                  src="images/kimyaeseul/kitchen.png"
                  width="638px"
                  height="600px"
                />
              </div>

              <div className="feedbox">
                <div className="reactimgox">
                  <i className="fal fa-heart fa-lg" />
                  <i className="fal fa-comment fa-lg" />
                  <i className="fal fa-paper-plane fa-lg" />
                </div>
                <div className="bookMarkBox">
                  <div className="bookMark">
                    <i className="fal fa-bookmark fa-lg" />
                  </div>
                </div>
              </div>

              <div className="like">
                <div className="whatLikeBox">
                  <div className="one">
                    <img
                      alt="me.img"
                      src="images/kimyaeseul/storyImg1.jpg"
                      width="23px"
                      height="23px"
                    />
                  </div>

                  <div className="howManyLikeOnclick">
                    <p>min_nayn3님 외 434명이 좋아합니다</p>
                  </div>
                </div>
              </div>

              <ul id="commentLists">
                <li>
                  <div className="userComment">
                    <span className="name">
                      <span>yes_eulk3</span>
                    </span>
                    <span className="feedUserComment">
                      <span>좋아하는 공간</span>
                    </span>
                  </div>
                  <div className="howManyRecomment">
                    <span>댓글 101개 모두 보기</span>
                  </div>
                  <div className="whatTime">
                    <span>2시간 전</span>
                  </div>
                </li>
              </ul>

              <div className="commentReaction">
                <i className="far fa-laugh fa-2x" />
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button id="submit">게시</button>
              </div>
            </div>
          </main>

          <div className="asideboxCotainer">
            <div className="asidebox">
              <aside className="anotherProfile">
                <div className="asideUserProfile">
                  <img
                    alt="me.img"
                    src="images/kimyaeseul/userProfile.jpg"
                    width="57px"
                    height="57px"
                  />
                </div>

                <div className="account">yes_eulk3</div>
                <button className="reverseButton">전환</button>
              </aside>

              <div className="recommentText">
                <span className="recomment">회원님을 위한 추천</span>
                <span className="allView">모두 보기</span>
              </div>

              <div className="recommentFriendList">
                <div className="recommentFriends">
                  <div className="friend1">
                    <div className="friendImgSpan">
                      <img
                        alt="Realee__님의 img"
                        src="images/kimyaeseul/recommentImg1.jpg"
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="frienNickname">
                      <span>Realee__</span>
                      <div className="whoFollow">
                        <span>kha3lee364님 외 1명이 팔로우합니다</span>
                      </div>
                    </div>

                    <div className="anoterFollow" />
                    <span className="follow">팔로우</span>
                  </div>

                  <div className="friend2">
                    <div className="friendImgSpan">
                      <img
                        alt="eeee_oo_hi님의 img"
                        src="images/kimyaeseul/recommentImg2.jpg"
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="frienNickname">
                      <span>eeee_oo_hi</span>
                      <div className="whoFollow">
                        <span>park_sh___님 외 1명이 팔로우합니다</span>
                      </div>
                    </div>

                    <div className="anoterFollow" />
                    <span className="follow">팔로우</span>
                  </div>

                  <div className="friend3">
                    <div className="friendImgSpan">
                      <img
                        alt="Bee_suky___k님의 img"
                        src="images/kimyaeseul/recommentImg3.jpeg"
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="frienNickname">
                      <span>Bee_suky___k</span>
                      <div className="whoFollow">
                        <span>3kce253___님 외 1명이 팔로우합니다</span>
                      </div>
                    </div>

                    <div className="anoterFollow" />
                    <span className="follow">팔로우</span>
                  </div>

                  <div className="friend4">
                    <div className="friendImgSpan">
                      <img
                        alt="not_ahyean_but__님의 img"
                        src="images/kimyaeseul/recommentImg4.jpg"
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="frienNickname">
                      <span>not_ahyean_but__</span>
                      <div className="whoFollow">
                        <span>sun1junho님 외 1명이 팔로우합니다</span>
                      </div>
                    </div>

                    <div className="anoterFollow" />
                    <span className="follow">팔로우</span>
                  </div>

                  <div className="friend5">
                    <div className="friendImgSpan">
                      <img
                        alt="lomenig님의 img"
                        src="images/kimyaeseul/recommentImg5.jpg"
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="frienNickname">
                      <span>lomenig</span>
                      <div className="whoFollow">
                        <span>Ooops_lo님 외 1명이 팔로우합니다</span>
                      </div>
                    </div>

                    <div className="anoterFollow" />
                    <span className="follow">팔로우</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSeul;
