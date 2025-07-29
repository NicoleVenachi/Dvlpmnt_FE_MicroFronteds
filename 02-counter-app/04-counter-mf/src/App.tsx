import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

const App = () => (
  <Counter />
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);