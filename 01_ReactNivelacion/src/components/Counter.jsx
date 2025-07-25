import { Fragment, useState } from 'react';
import './Counter.css';
import styled from '@emotion/styled';
import { handleCLick } from '../helpers/handleClick';

const BtnDiminish = styled.button`
  background-color: white;
  color: black;
  &:hover {
    background-color: #44eeb5;
    font-weight: bold;
  }
`

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button style={{
        padding: '10px 20px',
        backgroundColor: 'blue',
      }} onClick={() => setCount(handleCLick(count, -1))}>-</button>

      <BtnDiminish onClick={() => setCount(handleCLick(count, 10))}>+</BtnDiminish>

    </div >
  );
};

export default Counter;