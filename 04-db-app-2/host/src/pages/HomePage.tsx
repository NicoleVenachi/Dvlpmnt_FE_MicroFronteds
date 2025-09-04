import React from 'react'
import Counter from "counter/Counter";

const HomePage = () => {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-xl'> Cunter MF</h1>
      <Counter initialCounter={5} />
    </div>
  )
}

export default HomePage
