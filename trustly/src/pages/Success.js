import React, { useState, useEffect } from 'react'
import ProgressBar from '../components/misc/ProgressBar'

export default function Success(props) {
  const [ product, setProduct ] = useState({})
  const { id: itemId } = props.match.params

  useEffect(() => {
    fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
      .then((res) => res.json())
      .then((data) => {
        const item = data.results.find(item => item.id === itemId)
        setProduct(item) 
        console.log(item)
      }
    )
  }, [])

  return (
    <>
    <div className="mt-20 max-w-3xl m-auto">
      <ProgressBar fill="#61CB46"/>
    </div>

    <div className="w-full max-w-6xl m-auto px-12 mt-20 grid grid-rows sm:grid-cols-2 gap-6 mb-20">
      <div className="col-span-1">
        <img className="rounded-lg object-cover w-full h-full" src={product.maxresURL} alt="" style={{maxHeight: '633px', maxWidth: '532px'}}/>
      </div>
      <div className="shadow w-full bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-2 justify-between">
          <div className="col-span-1">
            <div className="mb-4">
              <label className="text-xl">Order summary</label>
            </div>
            <div className="mb-1">
              <span className="text-base">{product.description}</span>
            </div>
            <div className="text-base text-gray-500">
              <p className="mb-1">x1 {product.color} size 41</p>
              <p>item id #{product.id}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <label className="text-2xl">Payment Method</label>
            </div>
            <div className="flex justify-center items-center">
              <img src="/assets/payment.svg" alt="online banking" />
              <span className="ml-2 text-lg">Online Banking</span>
            </div>
          </div>
          <div className="col-span-1 mt-6">
            <div className="justify-center">
              <div>
                <div>
                  <p className="text-base">Total cost</p>
                </div>
                <div>
                  <p className="text-base text-gray-500">Delivery included</p>
                </div>
              </div>
              <div className="self-center">
                <span className="text-4xl">{product.currency} {product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}

