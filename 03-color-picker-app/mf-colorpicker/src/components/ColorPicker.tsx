import { useColors } from '../hooks/useColors';
const ColorPicker = () => {
  const { color, colorList, handleChangeColor, handleSubmitSaveColor } = useColors()
  return (
    <>
      <form onSubmit={handleSubmitSaveColor}>
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
            </div>
            {color}
          </h2>

          <button type="submit" className="btn btn-success" >Save Color</button>
        </div>
      </form>
      <pre>
        {colorList}
      </pre>
    </>
  );
};

export default ColorPicker;
