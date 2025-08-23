import Swal from "sweetalert2";

const ColorList = ({ colorsList, handleClickClearColors }: { colorsList: string[], handleClickClearColors: () => void }) => {

  // const colorsList = ['#000', '#60da94', '#54b2dd', '#d8d873', '#25254d', '#f0f', '#da2c7d'];
  console.log(colorsList);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Color ${color} copied to clipboard!`,
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
    })
  }

  const fallBackErr = <div className="alert alert-danger" role="alert">
    <b> No pre-saved colors... </b>
  </div>
  return (

    <>
      {colorsList.length > 0 &&
        <button className="btn btn-danger my-4 w-100" onClick={handleClickClearColors}>
          Clear Colors
        </button>
      }
      <div className="list-group text-center">
        {(!colorsList || colorsList.length === 0) ? fallBackErr : colorsList.map((color, index) => (
          <button
            key={index}
            type="button"
            className="list-group-item list-group-item-action text-white"
            aria-current="true"
            title="copy..."
            style={{
              backgroundColor: color,
              fontWeight: 'bold',
              borderRadius: '0.25rem',
              marginBottom: '0.5rem',
            }}
            onClick={() => handleCopyColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  )
}

export default ColorList
