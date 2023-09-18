import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const actionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// TODO: actions: increment, decrement
const increment = () => {
  return {
    type: actionType.INCREMENT,
  };
};

const decrement = () => {
  return {
    type: actionType.DECREMENT,
  };
};

// TODO: reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return state + 1;
    case actionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// TODO: store
let store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
