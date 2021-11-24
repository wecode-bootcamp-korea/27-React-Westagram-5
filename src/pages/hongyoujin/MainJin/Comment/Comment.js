/* eslint-disable */

import React from 'react';
import '../Comment/Comment.scss';

function Comment(props) {
  return (
    <li className="Comment">
      <div>
        <span className="Comment__name">chobo_coding</span>
        &nbsp;
        <span className="Comment__text">{props.comment}</span>
      </div>
      <button type="button" className="Comment__like">
        <i className="far fa-heart like_heart" />
      </button>
    </li>
  );
}

export default Comment;
