import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

import Navbar from './components/base/Navbar'


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/checkout/success/:id' component={Success} />
      <Route exact path='/checkout/:id' component={Checkout} />
      <Route exact path='/' component={Home} />
    </Switch>
    </> 
  )
}

export default App
