import ReactDOM from "react-dom/client";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => (
  <>
    <ColorList colorsList={[]}></ColorList>

    <ColorList colorsList={['#000', '#60da94', '#54b2dd', '#d8d873', '#25254d', '#f0f', '#da2c7d']}></ColorList>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);