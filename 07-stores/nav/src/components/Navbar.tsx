import React from 'react'
import './navbar.css'
import { useCounterStore } from 'storeMF/Store'

const Navbar = () => {
  const { counter, increment, decrement, clear } = useCounterStore();
  return (
    <>
      <h1> Navbar MF {counter.value} </h1>
      <button onClick={clear}> Clear </button>
    </>
  )
}

export default Navbar
