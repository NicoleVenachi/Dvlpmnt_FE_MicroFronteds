import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";

const App = () => (
  <div className="container">
    <Header />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);