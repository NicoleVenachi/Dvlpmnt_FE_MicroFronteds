import ReactDOM from "react-dom/client";

import "./index.css";
import Counter from "./components/Counter";

const App = () => (
  <div className="container ">
    <Counter initialCounter={5} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);