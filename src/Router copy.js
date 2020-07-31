import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Collections from '../src/Collections/Collections'
import SelectedProduct from '../src/SelectedProduct/SelectedProduct'
import AboutUS from '../src/Aboutus/Aboutus'
import ContactUS from '../src/ContactUs/ContactUs'


const Routes = props => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact  path = '/collection' component = {Collections} />
          <Route exact  path = '/selectedproduct' component = {SelectedProduct} />
          <Route exact path = '/aboutus' component = {AboutUS} />
          <Route exact path = '/contactus' component = {ContactUS} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
