import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  // Access the Redux state using useSelector
  const counter = useSelector((state: any) => state.counter.value)

  // Get the dispatch function using useDispatch
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Counter: {counter}</h1>
    </div>
  )
}

export default App
