import React from 'react';
import { decrement, increment } from '../actions';

const ActionButton = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ActionButton;
