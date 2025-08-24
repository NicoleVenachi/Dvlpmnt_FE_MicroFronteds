import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./Components/Navbar";

const App = () => (
  <>
    <Navbar />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: mf-navbar</div>
      <div>Framework: react-19</div>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);