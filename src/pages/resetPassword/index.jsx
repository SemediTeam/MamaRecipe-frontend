import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { authImage, LogoAuth } from '../../assets';
import ResetPassword from '../../components/resetPassword/resetPassword';
import './auth.css';

export default class ResetPass extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="position-relative d-none d-md-block col-md-4 col-lg-6 p-0" style={{backgroundColor : 'yellow'}}>
            <img ssrc={authImage} alt="background" style={{objectFit: 'cover',objectPosition: 'center', height:'100vh'}} className="w-100"/>
            
            <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
              <img src={LogoAuth} alt="logo"/>
            </div>
          </div>

          <div className="full-h d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
            <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center font-weight-medium p-0">
             <Route exact path={this.props.match.path} component={ResetPassword} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
