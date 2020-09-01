import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import ProgressBar from '../components/misc/ProgressBar'
import { BankButton, PaymentButton } from '../components/base/Buttons'

export default function Checkout(props) {
  const [ product, setProduct ] = useState({})
  const { id: itemId } = props.match.params
  const history = useHistory()

  useEffect(() => {
    fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
      .then((res) => res.json())
      .then((data) => {
        const item = data.results.find(item => item.id === itemId)
        setProduct(item) 
        console.log(item)
      }
    )
    const script = document.createElement('script')
    script.src = "https://sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438"
    script.async = true
    document.body.appendChild(script)
  }, [])

  function ContinueClick() {
    window.PayWithMyBank.addPanelListener(function(command, event) {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          history.push(`/checkout/success/${product.id}`)
        } 
        return false
      }
    })
   
    window.PayWithMyBank.establish({
      accessId: 'D61EC9BAF0BB369B9438',
      merchantId: '1004314986',
      metadata: { demo: 'enabled' },
      currency: product.currency,
      paymentType: 'Deferred',
      amount: product.price,
      description: 'barcelos.lucas@gmail.com',
      merchantReference: '123456',
      returnUrl: '#success',
      cancelUrl: '#cancel'
    })
  }

  return (
    <>
    <div className="mt-20 max-w-3xl m-auto">
      <ProgressBar fill="#E8E8E8" className="text-gray-500"/>
    </div>

    <div className="w-full max-w-6xl m-auto px-12 mt-20 grid grid-rows sm:grid-cols-2 gap-6 mb-20">
      <div className="col-span-1">
        <img className="rounded-lg object-cover w-full h-full" src={product.maxresURL} alt="" style={{maxHeight: '633px', maxWidth: '532px'}}/>
      </div>

      <div className="shadow w-full bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-2 justify-between">
          <div className="col-span-1">
            <div className="mb-4">
              <label className="text-xl">Cart total</label>
            </div>
            <div className="mb-1">
              <span className="text-base">{product.description}</span>
            </div>
            <div className="text-base text-gray-500">
              <p className="mb-1">x1 {product.color} size 41</p>
              <p>Item #{product.id}</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <label className="text-xl">Delivery details</label>
            </div>
            <div className="mb-4 text-base text-gray-500">
              <p>John Smith</p>
              <p>Phone no: 01312428200</p>
              <p>Address: Redwood City, 2000.</p>
            </div>
            <div className="flex">
              <div>
                <div>
                  <p className="text-base">Total cost</p>
                </div>
                <div>
                  <p className="text-base text-gray-500">Delivery included</p>
                </div>
              </div>
              <div className="self-center ml-4 flex">
                <span className="text-xl">{product.currency} {product.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <label className="text-xl">Select your payment method</label>
        </div>

        <div className="mt-4">
          <BankButton 
            placeholder="Online Banking"
            src="/assets/banks.png"
            alt="Online Banking"
          />
          <PaymentButton
            placeholder="Card payment"
            src="/assets/cards.png"
            alt="Card Payment"
          />
          <PaymentButton
            placeholder="Apple Pay"
            src="/assets/apple.png"
            alt="Apple Pay"
          />
        </div>

        <div className="mt-5 flex justify-center sm:justify-end">
          <button type="button" onClick={() => ContinueClick()} className="text-white px-4 py-2 rounded-lg w-64 focus:outline-none" style={{backgroundColor: '#6B8067'}}>
            Continue
          </button>
        </div>

      </div>
    </div>
    </>
  )
}