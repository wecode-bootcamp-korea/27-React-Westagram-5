import React from 'react';
// import { Link } from "react-router-dom";
// import logo from "./logo.svg";
import '../MainJin/MainJin.scss';
import Nav from '../../../components/Nav/Nav';

function MainJin() {
  return (
    <div className="Main">
      <Nav />
      <div className="Main__total">
        <StoryBox />
        <Feed />
      </div>
      <Aside />
    </div>
  );
}

function StoryBox() {
  return (
    <div className="Main__total__story-box">
      <div className="Main__total__story-box__toggle-btns">
        <button
          className="Main__total__story-box__toggle-btns__btn-left"
          type="button"
        />
        <button
          className="Main__total__story-box__toggle-btns__btn-right"
          type="button"
        >
          <i className="fas fa-arrow-circle-right" />
        </button>
      </div>
      <ul className="Main__total__story-box__story-list">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ul>
    </div>
  );
}
function Story() {
  return (
    <li className="Main__total__story-box__story-list__story">
      <div className="Main__total__story-box__story-list__story__item">
        <img
          src="images/hongyoujin/profile_image.jpg"
          className="Main__total__story-box__story-list__story__item__img"
          alt="story_img"
        />
        <span className="Main__total__story-box__story-list__story__item__id">
          wecode
        </span>
      </div>
    </li>
  );
}
function Feed() {
  return (
    <article className="Main__total__feed">
      <div className="Main__total__feed__info">
        <img
          src="images/hongyoujin/profile_image.jpg"
          className="Main__total__feed__info__img"
          alt=""
        />
        <div className="Main__total__feed__info__profile">
          <span className="Main__total__feed__info__profile__id">haribo</span>
          <span className="Main__total__feed__info__profile__address">
            wework 선릉 2호점
          </span>
        </div>
        <i className="far fa-ellipsis-h Main__total__feed__info__setting" />
      </div>
      <FeedImages />
      <div className="Main__total__feed__icons">
        <div className="Main__total__feed__icons__response">
          <button className="Main__total__feed__icons__response__btn">
            <i className="fal fa-heart" />
          </button>
          <button className="Main__total__feed__icons__response__btn">
            <i className="fal fa-comment" />
          </button>
          <button className="Main__total__feed__icons__response__btn">
            <i className="fal fa-paper-plane" />
          </button>
        </div>
        <div className="Main__total__feed__icons__mark">
          <button className="Main__total__feed__icons__mark__btn">
            <i className="fal fa-bookmark" />
          </button>
        </div>
      </div>
      <div className="Main__total__feed__board">
        <div className="Main__total__feed__board__like-num">
          좋아요 <span className="num-update">838</span>개 모두 보기
        </div>
        <div className="Main__total__feed__board__user">
          <span className="Main__total__feed__board__user__name">haribo</span>
          &nbsp;
          <span className="Main__total__feed__board__user__text">
            🐣; Hello, my name is git. <br />
            Lorem ipsum dolor sit! my name is
          </span>
        </div>
        <div className="Main__total__feed__board__comment-num">
          댓글 <span>84</span>개 모두 보기
        </div>
        <ul className="Main__total__feed__board__list">
          <Comment />
        </ul>

        <div className="Main__total__feed__board__date">
          <time className="Main__total__feed__board__date__update">2일 전</time>
        </div>
      </div>
      <div className="Main__total__feed__comment">
        <form
          action=""
          method="post"
          className="Main__total__feed__comment__form"
        >
          <button
            type="button"
            className="Main__total__feed__comment__form__icon"
          >
            <i className="fal fa-smile " />
          </button>
          <textarea
            className="Main__total__feed__comment__form__textarea"
            name="textarea"
            id="textarea"
            cols="50"
            rows="5"
            placeholder="댓글 달기..."
          />

          <button
            type="button"
            className="Main__total__feed__comment__form__btn"
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
}
function FeedImages() {
  return (
    <div className="Main__total__feed__images">
      <button type="button" className="Main__total__feed__images__btn-right">
        <i className="fas fa-arrow-circle-right" />
      </button>
      <button type="button" className="Main__total__feed__images__btn-left">
        <i className="fas fa-arrow-circle-left" />
      </button>
      <div className="Main__total__feed__images__img-box">
        <img
          src="images/hongyoujin/profile_image.jpg"
          alt=""
          className="Main__total__feed__images__img-box__img"
        />
        <img
          src="images/hongyoujin/profile_image.jpg"
          alt=""
          className="Main__total__feed__images__img-box__img"
        />
        <img
          src="images/hongyoujin/profile_image.jpg"
          alt=""
          className="Main__total__feed__images__img-box__img"
        />
      </div>
    </div>
  );
}
function Comment() {
  return (
    <li className="Main__total__feed__board__list__comment">
      <div>
        <span className="Main__total__feed__board__list__comment__name">
          chobo_coding
        </span>
        &nbsp;
        <span className="Main__total__feed__board__list__comment__text">
          git, you are so cute !<br />
        </span>
      </div>
      <button
        type="button"
        className="Main__total__feed__board__list__comment__like"
      >
        <i className="far fa-heart like_heart" />
      </button>
    </li>
  );
}
function Aside() {
  return (
    <aside className="Main__aside">
      <Profile />
      <div className="Main__aside__recommend">
        <div className="Main__aside__recommend__for-you">
          <p>회원님을 위한 추천</p>
          <button
            type="button"
            className="Main__aside__recommend__for-you__all-btn"
          >
            모두 보기
          </button>
        </div>
        <div className="Main__aside__recommend__follower">
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
        </div>
      </div>
    </aside>
  );
}
function Profile() {
  return (
    <div className="Main__aside__profile">
      <img
        src="images/hongyoujin/profile_image.jpg"
        className="Main__aside__profile__image"
        alt="profile_image"
      />
      <div className="Main__aside__profile__info">
        <p className="Main__aside__profile__info__id">chobo_coding</p>
        <p className="Main__aside__profile__info__text">do it 🤓</p>
      </div>

      <button className="Main__aside__profile__btn">전환</button>
    </div>
  );
}
function Recommend() {
  return (
    <div className="Main__aside__recommend__follower__profile">
      <img
        src="images/hongyoujin/profile_image.jpg"
        className="Main__aside__recommend__follower__profile__img"
        alt=""
      />
      <div className="Main__aside__recommend__follower__profile__info">
        <p className="Main__aside__recommend__follower__profile__info__id">
          prince_pie_son
        </p>
        <p className="Main__aside__recommend__follower__profile__info__join">
          Instagram 신규 가입
        </p>
      </div>
      <button className="Main__aside__recommend__follower__profile__btn">
        팔로우
      </button>
    </div>
  );
}

export default MainJin;
