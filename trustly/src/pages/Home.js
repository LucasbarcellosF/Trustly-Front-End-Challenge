import React, { useState, useEffect } from 'react'
import Product from '../components/product/Product'

export default function Home() {
  const [ products, setProducts ] = useState([])
  const [ searchField, setSearchField ] = useState('')
  const [ filteredProducts, setFilteredProducts ] = useState([])

  useEffect(() => {
    fetch('https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.results) 
    )
  }, [])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useEffect(() => {
    const newList = products.filter(item => {
      const description = item.description.toLowerCase()
      const color = item.color.toLowerCase() 
      if (description.indexOf(searchField.toLowerCase()) >= 0 || color.indexOf(searchField.toLowerCase()) >= 0) {
        return true
      }
      return false
    })
    setFilteredProducts(newList)
  }, [searchField])

  return (
    <div>
      <div className="mt-24 w-full px-6 sm:px-0 sm:max-w-4xl m-auto">
        <Search onChange={(e) => setSearchField(e.target.value)}/>
      </div>
      <div className="my-8 relative max-w-5xl mx-auto">
        <div className="grid grid-row sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => <Product product={product} />)}
        </div>  
      </div>
    </div>
  )
}

function Search(props) {
  const { onChange } = props
  return (
    <div className="w-full">
      <div className="border-b">
        <svg className="h-6 w-auto absolute" viewBox="0 0 1024 1024"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" fill="#626262"/></svg>
        <input type="text" onChange={onChange} className="w-full outline-none pl-8 text-center text-xl" placeholder="Search for your sneaker" />
      </div>
    </div>
  )
}