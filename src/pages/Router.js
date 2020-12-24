import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PrivateRouter } from "../components/utilities";

import Dashboard from './dashboard'
import Auth from './auth';
import Profile from './profile';
import Detail from "./detail";

import store from '../global/store';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/recipe" component={Detail}/>
        <Route path="/addRecipe" />
        
        <PrivateRouter path="/profile">
          <Route component={Profile}/>
        </PrivateRouter>
        
      </BrowserRouter>
    </Provider>
  )
}
