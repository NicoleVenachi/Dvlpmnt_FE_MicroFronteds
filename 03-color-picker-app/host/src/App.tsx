import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from 'colorPicker/ColorPicker'

const App = () => (
  <>
    <h1 className="text-center bg-dark text-white p-2 h-2"> Color Picker </h1>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4">Lista de Colores</div>
        <div className="col-12 col-md-8">
          {/* defualt reoponse class - 12 (whole content) */}
          <ColorPicker />
        </div>
      </div>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);