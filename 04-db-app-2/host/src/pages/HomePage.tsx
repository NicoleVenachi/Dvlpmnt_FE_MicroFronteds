import React from 'react'
import Counter from "counter/Counter";
import ErrorHandler from '../components/ErrorHandler';

const HomePage = () => {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-xl'> Cunter MF</h1>

      <ErrorHandler>
        <Counter initialCounter={5} />
        {/* <Counter /> */}
      </ErrorHandler>
    </div>
  )
}

export default HomePage
