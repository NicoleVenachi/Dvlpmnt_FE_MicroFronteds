import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "remoteMF/Header";
import Swal from "sweetalert2";

const App = () => (
  <div className="container">
    <Header />
    <button onClick={() => Swal.fire('From Host', 'Test alert', "success")}>CLICKK</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);