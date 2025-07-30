import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from "./components/ColorPicker";

const App = () => (
  <ColorPicker></ColorPicker>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);