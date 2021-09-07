import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Account from './components/account/Account'
import Contact from './components/common/Contact'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import ShoeIndex from './components/shoe/ShoeIndex'
import ShoeShow from './components/shoe/ShoeShow'

function App() {
  return (
    <BrowserRouter>
      <h1 className="logo">Golden Shoe</h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shoes/:shoeId" component={ShoeShow}/>
        <Route path="/shoes" component={ShoeIndex}/>
        <Route path="/account" component={Account}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
