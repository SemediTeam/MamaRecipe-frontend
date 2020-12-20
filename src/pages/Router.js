import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Dashboard from './dashboard'
import Auth from './auth';

export default function Router() {
  return (
      <BrowserRouter>
        <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/addRecipe" />
        <Route path="/profile" />
      </BrowserRouter>
  )
}
