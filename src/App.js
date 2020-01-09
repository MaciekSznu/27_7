import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentInput from './NewComment';


const App = () => {
  return (
    <div className="App">
      <h2>Comments List</h2>
      <CommentsListContainer />
      <h2>Add new Comment</h2>
      <NewCommentInput />
    </div>
  );
};

export default App;
