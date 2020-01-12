import React from 'react'

// const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

const confirmation = () => {
  const text = prompt('Write new comment text below');
  console.log(text);
  return text;
}

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove Comment</button>
    <button onClick={() => editComment(id, confirmation(text))}>Edit Comment</button>
  </li>

export default Comment;