import React from 'react';
import { decrement, increment } from '../actions';

const ActionButton = ({ dispatch, value }) => {
  return (
    <div>
      <button onClick={() => dispatch(increment(Number(value)))}>+</button>
      <button onClick={() => dispatch(decrement(Number(value)))}>-</button>
    </div>
  );
};

export default ActionButton;
