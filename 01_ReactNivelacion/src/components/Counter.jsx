import React, { Fragment, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </Fragment>
  );
};

export default Counter;