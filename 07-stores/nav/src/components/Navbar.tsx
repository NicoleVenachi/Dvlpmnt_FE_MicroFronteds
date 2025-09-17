import React from 'react'
import './navbar.css'
import { useCounterStore } from 'storeMF/Store'
import Swal from 'sweetalert2';

const Navbar = () => {
  const { counter, clear } = useCounterStore();

  const handleClear = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No',
      icon: 'warning',
    })
      .then((result) => {
        if (result.isConfirmed) clear();
      })

  }
  return (
    <>
      <h1> Navbar MF {counter.value} </h1>
      <button onClick={handleClear}> Clear </button>
    </>
  )
}

export default Navbar
