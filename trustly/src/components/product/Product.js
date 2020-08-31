import React from 'react'
import { Link } from 'react-router-dom'


export default function Product(props) {
  const { product } = props
  const { id, description, color, price, currency, thumbnailURL, maxresURL } = product

  return (
    <div className="my-6">
      <div className="">
        <div className="flex w-full justify-center">
          <div className="overflow-hidden shadow-md relative">
            <img className="h-60  object-fill object-center" src={thumbnailURL} alt="" />
            <div className="flex h-auto w-auto justify-center">
              <p className="mt-2 text-center text-2xl">
                {description}
              </p>
            </div>

            <div className="flex mt-4 items-center justify-between">
              <div className="mx-auto">
                <label className="text-gray-500 font-medium">Size</label>
                <select className="ml-3 border rounded-lg p-1 px-4 outline-none text-gray-800" value="41">
                  <option value="41">41</option>
                </select>
              </div>

              <div className="mx-auto">
                <label className="text-gray-500 font-medium">Quantity</label>
                <select className="ml-3 border rounded-lg p-1 px-4 outline-none text-gray-800" value="41">
                  <option value="1">1</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <label className="font-bold text-2xl">$ {price}</label>
            </div>
              
            <div className="mt-4 mx-2 my-2">
              <Link to={`/checkout/${id}`} > <button type="button" className="bg-green-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none">
                Add to cart
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
