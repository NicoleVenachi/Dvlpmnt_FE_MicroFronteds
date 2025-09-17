import ReactDOM from "react-dom/client";

import Navbar from 'navMF/Navbar';
import Counter from 'counterMF/Counter'
import "./index.css";

import { StoreProvider, useCounterStore } from 'storeMF/Store'

const App = () => {
  const { counter, increment } = useCounterStore();
  return (
    <div className="container">
      <Navbar />
      <div>Name: host {counter.value}</div>
      <Counter />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<StoreProvider><App /></StoreProvider>);