import ReactDOM from "react-dom/client";

import Navbar from "navBar/Navbar"; // Importing the Navbar component from the remote module

const App = () => (
  <>
    <Navbar />
    <h1>Host app</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);