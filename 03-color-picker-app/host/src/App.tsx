import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from "colorPicker/ColorPicker";
import ColorList from "colorList/ColorList";
import { useColors } from "colorPicker/useColors";

const App = () => {
  const { color, colorList, handleChangeColor, handleSubmitSaveColor } =
    useColors();
  return (
    <>
      <h1 className="text-center bg-dark text-white p-2"> Color Picker </h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList colorsList={colorList} />
          </div>
          <div className="col-12 col-md-8">
            {/* defualt reoponse class - 12 (whole content) */}
            <ColorPicker
              color={color}
              colorList={colorList}
              handleChangeColor={handleChangeColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
