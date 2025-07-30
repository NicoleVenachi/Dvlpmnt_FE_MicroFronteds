import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState('#000');

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => setColor(event.target.value);

  return (
    <form>
      <input
        type="color"
        className="form-control"
        style={{
          width: "100%",
          height: "300px",
        }}
        title="Pick a color ..."
        onChange={handleChangeColor}
      />

      <div className="text-center">
        <h2 className="mt-3 fw-bolder">
          <div
            style={{
              width: "20px",
              height: "20px",
              display: "inline-block",
              backgroundColor: `${color}`,
              margin: "0 1rem",
              borderRadius: "100%",
            }}
          >
          </div> {color} </h2>
      </div>
    </form>
  );
};

export default ColorPicker;
