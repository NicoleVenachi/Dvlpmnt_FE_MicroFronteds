import React from 'react'
import { useCounterStore } from 'storeMF/Store'
import './counter.css'
import Swal from 'sweetalert2';
const Counter = () => {
  const { counter, increment, decrement } = useCounterStore();

  const handleIncrement = () => {

    if (counter.value < 10) {
      increment();
      return
    }

    Swal.fire({
      title: 'Error!',
      text: 'You have reached the maximum value',
      icon: 'error',
    })
  }


  return (
    <>
      <h3> Counter: {counter.value} </h3>

      <button onClick={handleIncrement}> Increment </button>
      <button onClick={decrement}> Decrement </button>
    </>
  )
}

export default Counter
