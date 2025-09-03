import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <>

      <h1 className='mt-16 text-center text-5xl text-red-500'> 404 - Page Not Found </h1>
      <NavLink to="/" className="mt-8 block text-center text-blue-500 underline">
        Go back to Home
      </NavLink>
    </>
  )
}

export default NotFound
