import React from 'react';
import { login } from '../actions';

const LoginButton = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch(login())}>ログインorログアウト</button>
  );
};

export default LoginButton;
