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
import AddRecipe from './addRecipe';
import ResetPass from './resetPassword';
import EditRecipe from './editRecipe';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>

          public route
          <Route exact path="/" component={Dashboard}/>
          <Route path="/search" component={Search}/>
          <Route path="/recipe" component={Detail}/>
        
          restricted route
          <LoginCheck path="/auth">
            <Route component={Auth}/>
          </LoginCheck>
          <PrivateRouter path="/profile">
            <Route component={Profile}/>
          </PrivateRouter>
          <PrivateRouter path="/resetPassword">
            <Route component={ResetPass}/>
          </PrivateRouter>
          <PrivateRouter path="/addRecipe">
            <Route component={AddRecipe}/>
          </PrivateRouter>
          <PrivateRouter path="/editRecipe/:id">
            <Route component={EditRecipe}/>
          </PrivateRouter>          

          error route
          <Route exact path="/blank" component={BlankPage}/>          
          <Route path="*" render={()=>
            <Redirect to={{ pathname: "/blank" }}/>
          }/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
