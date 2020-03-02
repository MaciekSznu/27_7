import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentInput from './NewComment';
import DevTools from './DevTools';


const App = () => {
  return (
    <div className="App">
      <h2>Comments List</h2>
      <CommentsListContainer />
      <h2>Add new Comment</h2>
      <NewCommentInput />
      <DevTools />
    </div>
  );
};

export default App;
 