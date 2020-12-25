import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PrivateRouter, LoginCheck } from "../components/utilities";

import Dashboard from './dashboard'
import Auth from './auth';
import Profile from './profile';
import Detail from "./detail";

import store from '../global/store';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <LoginCheck path="/auth">
          <Route component={Auth}/>
        </LoginCheck>
        
        <Route path="/" exact component={Dashboard}/>
        <Route path="/recipe" component={Detail}/>
        <Route path="/addRecipe" />
        
        <PrivateRouter path="/profile/:menu">
          <Route component={Profile}/>
        </PrivateRouter>
        
      </BrowserRouter>
    </Provider>
  )
}
