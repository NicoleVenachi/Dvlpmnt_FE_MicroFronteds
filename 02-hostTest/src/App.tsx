import ReactDOM from "react-dom/client";

import Navbar from "navBar/Navbar"; // Importing the Navbar component from the remote module
import CounterReact from "counterReact/CounterReact";

import "./index.css"; // Assuming this is the global CSS file for the host app
const App = () => (
  <>
    <Navbar />

    <div className='m-4'>
      <h1>Counter MF -Host app-</h1>
      <CounterReact />
    </div>
    {/* Assuming CounterReact is a component from the counter_mf remote module */}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);