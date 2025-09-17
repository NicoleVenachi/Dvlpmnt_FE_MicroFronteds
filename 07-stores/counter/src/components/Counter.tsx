import React from 'react'
import { useCounterStore } from 'storeMF/Store'
import './counter.css'
const Counter = () => {
  const { counter, increment } = useCounterStore();
  return (
    <>
      <h3> Counter: {counter.value} </h3>

      <button onClick={() => increment()}> Increment </button>
      <button> Decrement </button>
    </>
  )
}

export default Counter
