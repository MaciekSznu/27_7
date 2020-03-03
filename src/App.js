import React from 'react';
import './App.scss';
import CommentsListContainer from './CommentsListContainer';
import NewCommentInput from './NewComment';
import DevTools from './DevTools';


const App = () => {
  return (
    <div className="App">
      <h1 className="AppTitle">Comments List</h1>
      <CommentsListContainer />
      <h2 className="FormTitle">Add new Comment</h2>
      <NewCommentInput />
      <DevTools />
    </div>
  );
};

export default App;
 