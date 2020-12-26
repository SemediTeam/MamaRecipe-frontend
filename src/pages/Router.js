import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PrivateRouter, LoginCheck } from "../components/utilities";

import Dashboard from './dashboard'
import Auth from './auth';
import Profile from './profile';
import Detail from "./detail";
import { BlankPage } from '../components/utilities';

import store from '../global/store';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <LoginCheck path="/auth">
            <Route component={Auth}/>
          </LoginCheck>
          
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/recipe/:id" component={Detail}/>
          <Route path="/addRecipe" />
          
          <PrivateRouter path="/profile">
            <Route component={Profile}/>
          </PrivateRouter>

          <Route exact path="/blank" component={BlankPage}/>          
          <Route path="*" render={()=>
            <Redirect to={{ pathname: "/blank" }}/>
          }/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
