import React from 'react'

export default function ProgressBar(props) {
  const { fill, className } = props
  return (
    <div className="m-auto w-full justify-between hidden sm:flex">
      <div className="absolute max-w-3xl z-0 ml-2 w-full border-t-2 my-2 hidden sm:block" style={{maxWidth: "740px"}}></div>
      <div className="z-40">
        <svg className="h-4 w-auto m-auto mb-2" viewBox="0 0 16 16"><g fill="#61CB46"><circle cx="8" cy="8" r="8"/></g></svg>
        <label>Cart</label>
      </div>
      <div className="z-40">
        <svg className="h-4 w-auto m-auto mb-2" viewBox="0 0 16 16"><g fill="#61CB46"><circle cx="8" cy="8" r="8"/></g></svg>
        <label>Payment Options</label>
      </div>
      <div className="z-40">
        <svg className="h-4 w-auto m-auto mb-2" viewBox="0 0 16 16"><g fill={fill}><circle cx="8" cy="8" r="8"/></g></svg>
        <label className={className}>Receipt</label>
      </div>
    </div>
  )
}