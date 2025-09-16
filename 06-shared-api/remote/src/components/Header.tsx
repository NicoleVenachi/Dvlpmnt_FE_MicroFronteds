
import Swal from "sweetalert2"
import "./Header.css"
const Header = () => {
  return (<>
    <h1 onClick={() => Swal.fire('SharedAPI', 'SharedAPI use Swat', "info")}>Shared API</h1>
  </>
  )
}

export default Header
