import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from "./components/ColorPicker";
import { useColors } from "./hooks/useColors";

const App = () => {
  const { handleChangeColor, handleSubmitSaveColor } =
    useColors();
  return (
    <ColorPicker
      color={'#76c7c7'}
      colorList={['']}
      handleChangeColor={handleChangeColor}
      handleSubmitSaveColor={handleSubmitSaveColor}
    ></ColorPicker>
  )
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);