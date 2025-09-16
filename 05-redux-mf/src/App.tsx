import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

const App = () => {

  // Access the Redux state using useSelector
  const counter = useSelector((state: any) => state.counter.value)

  // Get the dispatch function using useDispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}> increment </button>
      <button onClick={() => dispatch(decrement())}> decrement </button>
      <button onClick={() => dispatch(incrementByAmount(10))}> increment by 10 </button>
    </div>
  )
}

export default App
