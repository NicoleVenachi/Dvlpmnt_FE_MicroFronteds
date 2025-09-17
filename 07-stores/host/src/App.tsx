import ReactDOM from "react-dom/client";

import Navbar from 'navMF/Navbar';
import Counter from 'counterMF/Counter'
import "./index.css";

const App = () => (
  <div className="container">
    <Navbar />
    <div>Name: host</div>
    <Counter />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);