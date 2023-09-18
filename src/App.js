import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div className='App'>
      <h1>Redux</h1>
      <h3>カウント: {counter}</h3>
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ログインしてください</h3>}
    </div>
  );
}

export default App;
