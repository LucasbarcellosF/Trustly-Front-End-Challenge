import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar(props) {
  let location = useLocation()
  const [ currentLocation, setCurrentLocation ] = useState(location.pathname)

  function headerText() {
    if (currentLocation === '/') {
      return "Sneakers"
    }
    if (currentLocation.indexOf('/success') !== -1) {
      return "Review and Confirmation"
     } else {
      return "Checkout"
     } 
  }

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location])

  return (
    <div className="bg-gray-400 top-0 w-full">
      <nav className="">
        <div className="flex w-full justify-between h-16 px-4">
          <div className="flex items-center">
            {currentLocation !== '/' &&
              <Link to='/' className="bg-gray-500 items-center flex rounded-lg shadow px-1 pr-2 py-1 font-bold text-md">
                <svg className="h-8 w-8" viewBox="0 0 16 16"><g fill="black"><path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/></g></svg>
                Voltar
              </Link>
            }
          </div>
          
          <div className="flex items-center">
            <span className="flex text-2xl font-semibold leading-5 focus:outline-none transition duration-150 ease-in-out">
              {headerText()}
            </span>
          </div>

          <div className="flex items-center">
            <button className="text-sm rounded-full focus:outline-none transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
              <img className="h-10 w-auto rounded-full bg-gray-300" src="https://api.iconify.design/entypo:user.svg" alt="User" />
            </button>
          </div>
        </div> 
      </nav>    
    </div>
  )
}