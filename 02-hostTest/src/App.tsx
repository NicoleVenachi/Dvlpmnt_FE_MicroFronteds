import ReactDOM from "react-dom/client";

import Navbar from "navBar/Navbar"; // Importing the Navbar component from the remote module
import CounterReact from "counterReact/CounterReact";

const App = () => (
  <>
    <Navbar />
    <h1>Host app</h1>
    <CounterReact />
    {/* Assuming CounterReact is a component from the counter_mf remote module */}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);