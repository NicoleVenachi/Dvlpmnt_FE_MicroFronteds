import ReactDOM from "react-dom/client";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => (
  <>
    <ColorList></ColorList>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);