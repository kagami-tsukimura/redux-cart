import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ActionButton from './components/ActionButton';
import LoginButton from './components/LoginButton';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const changeValue = (e) => setValue(e.target.value);

  return (
    <div className='App'>
      <h1>Redux</h1>
      <h3>カウント: {counter}</h3>
      <input
        type='number'
        placeholder='カウント入力...'
        value={value}
        min={0}
        onChange={changeValue}
      />
      <ActionButton dispatch={dispatch} value={value} />
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ログインしてください</h3>}
      <LoginButton dispatch={dispatch} />
    </div>
  );
}

export default App;
