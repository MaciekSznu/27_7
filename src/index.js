import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { addComment } from './actions';
import DevTools from './DevTools';


// zmienna z przypisanym store aplikacji z dodanym devTools
const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment(`It's a very nice comment.`));
store.dispatch(addComment(`What a brilliant idea!`));

