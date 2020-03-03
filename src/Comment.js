import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Comment.scss';

const confirmation = () => {
  const text = prompt('Write new comment text below');
  console.log(text);
  return text;
}

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
  <div className="CommentBox">
    <p className="CommentText">{text}</p>
    <div className="CommentActionsWrapper">
      <div className="CommentVotes">votes: {votes}</div>
      <button className="VoteButton Plus" onClick={() => thumbUpComment(id)}><FontAwesomeIcon icon={faPlus} /></button>
      <button className="VoteButton Minus" onClick={() => thumbDownComment(id)}><FontAwesomeIcon icon={faMinus} /></button>
      <button className="ActionButton" onClick={() => removeComment(id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
      <button className="ActionButton" onClick={() => editComment(id, confirmation(text))}><FontAwesomeIcon icon={faEdit} /></button>
    </div>
  </div>

export default Comment;