import React, { useState } from 'react'
import "./Counter.css";
const Counter = ({ initialCounter }: { initialCounter: number }) => {

  console.log(initialCounter);


  if (!initialCounter) {
    throw new Error("Error in Counter component");
  }

  const [counter, setCounter] = useState(initialCounter || 0);
  return (
    <div className='counterContainer'>
      <button onClick={() => setCounter(counter + 1)}>+ 1</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>- 1</button>
    </div>
  )
}

export default Counter
