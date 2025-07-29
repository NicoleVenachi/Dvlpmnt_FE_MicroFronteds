import React, { useState } from 'react'
import "./Counter.css"
import Button from './Button';
import styled from '@emotion/styled'

const Success = styled.span`
  color: lime;
`

const Error = styled.span`
  color: tomato;
`

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className='Counter-container bg-[#444] text-white p-4 rounded-lg text-center text-2xl'>
      <h2> Counter: {' '}
        {counter < 0 ? <Error>{counter}</Error> : <Success>{counter}</Success>}


      </h2>
      <Button text={'+1'} onClick={() => setCounter(counter + 1)}></Button>
      <Button text={'-1'} onClick={() => setCounter(counter - 1)}></Button>
    </div>
  )
}

export default Counter
