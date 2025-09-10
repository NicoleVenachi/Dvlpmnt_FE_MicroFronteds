import ReactDOM from "react-dom/client";

import "./index.css";
import CharacterDetails from "./components/CharacterDetails";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-character-details</div>
    <div>Framework: react-19</div>
    <CharacterDetails />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);