import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, clear } from "../features/counter/counterSlice";

export const useCounterStore = () => {
  // counter getter
  const counter = useSelector((state: any) => state.counter);

  // counter setter
  const dispatch = useDispatch();

  return {
    counter,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  };
};
