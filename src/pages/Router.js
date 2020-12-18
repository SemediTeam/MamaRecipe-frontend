import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Dashboard from './dashboard'

export default function Router() {
  return (
      <BrowserRouter>
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/forgetpasswrord" />
        <Route path="/" exact component={Dashboard}/>
        <Route path="/addRecipe" />
        <Route path="/profile" />
      </BrowserRouter>
  )
}
