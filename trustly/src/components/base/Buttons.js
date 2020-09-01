import React from 'react'

function PaymentButton(props) {
  const { placeholder, src, alt } = props
  return (
    <div className="w-full cursor-pointer">
      <button type="button" className="text-sm sm:text-xl text-gray-600 mb-3 boder inline-flex justify-between items-center shadow w-full rounded-lg bg-white h-16 text-left px-4 focus:outline-none outline-none hover:shadow-outline">
        {placeholder}
        <img src={src} alt={alt} />
      </button>
    </div>
  )
}

function BankButton(props) {
  const { placeholder, src, alt } = props

  return (
    <fieldset className="w-ful shadow-outline bg-white cursor-pointer rounded-lg mb-3 h-20 items-center hover:shadow-outline">
      <legend className="bg-yellow-400 rounded-md px-3 py-auto text-gray-700 font-bold text-xs ml-8">Save $10</legend>
      <div className="flex justify-between text-left px-4 py-2 sm:py-0 md:py-2 lg:py-3 items-center content-center">
        <label className="text-sm sm:text-xl text-gray-600">{placeholder}</label>
        <img src={src} alt={alt} />
      </div>
    </fieldset>
  )
}

export {
  PaymentButton,
  BankButton
}