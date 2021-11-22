import React from 'react';
import './MainHo.scss';
import Nav from '../../../components/Nav/Nav';

function MainHo() {
  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="ss">
              <div className="profile">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAyMTAzMDlfMiAg%2FMDAxNjE1MjY3NjE3NDAx.EJ4minHh6DuVzMcsSog6CWIB-R3j16NVXA3G1FQJZ0Mg.o45QtWy7yEUgIiQtpd-1nZLwRF38HL94XEv4nrGTlzQg.PNG%2FIvqncdOv6zPcEKFsDE3blh1bEPxA.jpg&type=a340" />

                <span className="C9">C9</span>

                <span className="menuIcon">
                  <i className="fas fa-ellipsis-h" />
                </span>
              </div>
            </div>

            <img src="https://blog.kakaocdn.net/dn/w88bj/btqT3sO3p9L/MiIstaAS8XhnxSqmJ0qjM0/img.png" />

            <div className="RORO">
              <div className="imoticon">
                <i className="fas fa-heart" />
                <i className="far fa-paper-plane" />
                <i className="far fa-comment" />
              </div>
            </div>

            <div className="likes">
              <span className="like1">
                <img src="data:image/jpeg;base64,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" />
              </span>
              <span className="like2">
                <img src="data:image/jpeg;base64,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" />
              </span>
              <span className="love">
                <span className="bang">Bang민아</span>님 3700명이 좋아합니다
              </span>
              <div className="could">
                <pre>
                  <span className="bang">Could_9_ </span> 한 겨울밤의 꿈
                </pre>
              </div>
              <div className="five">댓글 5개 더보기</div>
              <div className="six">6시간전</div>
              <ul id="commentLists">
                <li>
                  <span className="Rona">Ronaldo</span>
                  <span>Heart..</span>
                </li>
              </ul>
            </div>
            <div className="comment">
              <input
                id="commentInput"
                type="text"
                placeholder="       댓글 달기..."
              />
              <button id="sumit">게시</button>
            </div>
          </article>
          <div className="main-right">
            <div className="main-top">
              <img src="https://i.pinimg.com/236x/8a/15/aa/8a15aa5b8631b6f69f3372ed4c140b25.jpg" />

              <span className="C8">C9</span>
              <span className="C7">전환</span>
            </div>
            <p>회원님을 위한추천</p>
            <div className="story">
              <div className="gangchu">
                <img src="https://cdn.interfootball.co.kr/news/photo/202008/500472_400475_2412.png" />
                <span className="son">Son7</span>
                <span className="son1">팔로우</span>
              </div>
              <div className="gangchu">
                <img src="https://ww.namu.la/s/15466804d32222f5dafd3865e237e43d9c06cb4de423f0c7952e96869c46d5fbf03e23c6676af357734201f1d25858e2987c43156a5addcbd90e9d4c7c3ea972136530379ee47ed46ce43fb77c9acc8f" />
                <span className="son">Kim heng Kuk</span>
                <span className="son2">팔로우</span>
              </div>
              <div className="gangchu">
                <img src="https://media.bunjang.co.kr/product/158753670_1_1625837846_w180.jpg" />
                <span className="son">Ralo</span>
                <span className="son3">팔로우</span>
              </div>
              <div className="gangchu">
                <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTAzMDJfMjkx/MDAxNTUxNDkxMDkxNDAz.RAZxo049UM0Q3FELT_feWqykuriunG_5U7d7aM_WkHUg.k1MHjQjsyBoUemNRNotr-3yR6OHIf1czlPbWklFlhbcg.PNG.soonchangism/image.png?type=w800" />
                <span className="son">GAMST</span>
                <span className="son4">팔로우</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainHo;
