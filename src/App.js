import React from 'react';
import './App.scss';
import CommentsListContainer from './CommentsList/CommentsListContainer';
import NewCommentInput from './NewComment/NewComment';

const App = () => {
  return (
    <div className="App">
      <h1 className="AppTitle">Comments List</h1>
      <CommentsListContainer />
      <h2 className="FormTitle">Add new Comment</h2>
      <NewCommentInput />
    </div>
  );
};

export default App;
 