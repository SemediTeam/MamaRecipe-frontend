import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PrivateRouter, LoginCheck } from "../components/utilities";

import Dashboard from './dashboard'
import Auth from './auth';
import Profile from './profile';
import Detail from './detail';
import Search from './search';
import { BlankPage } from '../components/utilities';

import store from '../global/store';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/search" component={Search}/>
          <Route exact path="/recipe/:id" component={Detail}/>
          
          <LoginCheck path="/auth">
            <Route component={Auth}/>
          </LoginCheck>
          <PrivateRouter path="/profile">
            <Route component={Profile}/>
          </PrivateRouter>
          <PrivateRouter path="/addRecipe">
            <div>{'addrecipe'}</div>
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
