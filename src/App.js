import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
      Tutaj będzie lista komentarzy
      <CommentsListContainer />
    </div>
  );
};

export default App;
