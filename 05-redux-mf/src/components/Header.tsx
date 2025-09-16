import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  // Access the Redux state using useSelector
  const counter = useSelector((state: any) => state.counter.value)

  return (
    <h1> Header - Counter: {counter}</h1>
  )
}

export default Header
