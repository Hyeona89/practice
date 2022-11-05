import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue(prev => prev + 1);
  const onChange = event => setKeyword(event.target.value);

  console.log('이건 매번 렌더링');

  useEffect(() => {
    console.log('이건 한번만');
  }, []);

  useEffect(() => {
    console.log('이건 keyword와 counter이 바뀌었을 때만');
  }, [keyword, counter]);

  useEffect(() => {
    if (keyword.length > 5) {
      console.log('이건 keyword가 5초과일 때만');
    }
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
