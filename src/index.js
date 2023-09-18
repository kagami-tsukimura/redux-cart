import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const actionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const incrementDispatch = () => {
  store.dispatch(increment());
};

const decrementDispatch = () => {
  store.dispatch(decrement());
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

store.subscribe(() => console.log(store.getState()));

// TODO: dispatch
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <button onClick={incrementDispatch}>{actionType.INCREMENT}</button>
    <button onClick={decrementDispatch}>{actionType.DECREMENT}</button>
  </React.StrictMode>
);
