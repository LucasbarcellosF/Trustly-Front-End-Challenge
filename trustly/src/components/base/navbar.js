import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Navbar(props) {
  let location = useLocation()
  const [ currentLocation, setCurrentLocation ] = useState(location.pathname)

  const pathMap = {
    '/': 'Sneakers',
    '/checkout/': 'Checkout',
    '/checkout/success': 'Review and Confirmation'
  }

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location])

  useEffect(() => {
  }, [currentLocation])
  
  return (

    <div className="bg-gray-400 top-0  w-full">
      <nav className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="flex h-16">

            <div className="flex items-center w-full">
              <div className="flex w-full justify-end">
                <a href="#sneakers" className="flex text-2xl font-semibold leading-5 focus:outline-none transition duration-150 ease-in-out">
                  {pathMap[currentLocation]}
                </a>
              </div>
            </div>
            
            <div className="flex justify-end w-full items-center">
              <button className="flex text-sm rounded-full focus:outline-none transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <img className="h-10 w-auto rounded-full bg-gray-300" src="https://api.iconify.design/entypo:user.svg" alt="User" />
              </button>
            </div>
          </div> 
        </div>
      </nav>    
    </div>

  )
}