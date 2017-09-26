import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </Switch>
      </div>
    </BrowserRouter>,
    document.getElementById('app')
  )
})
