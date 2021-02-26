import React, { Component } from "react";
import "./auth.css";
import { authImage, LogoAuth } from "../../assets";
import {
  Login,
  Register,
  ForgotPassword,
  Validate,
  ResetPassword,
} from "../../components/auth";
import { Route, Switch, Redirect } from "react-router-dom";
import { OtpCheck } from "../../components/utilities";

export default class Auth extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="position-relative d-none d-md-block col-md-4 col-lg-6 p-0"
            style={{ backgroundColor: "yellow" }}
          >
            <img
              src={authImage}
              alt="background"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100vh",
              }}
              className="w-100"
            />

            <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
              <img src={LogoAuth} alt="logo" />
            </div>
          </div>

          <div className="full-h d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
            <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center font-weight-medium p-0">
              <Switch>
                <Route exact path={this.props.match.path} component={Login} />
                <Route
                  exact
                  path={`${this.props.match.path}/signin`}
                  component={Login}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/signup`}
                  component={Register}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/forgot`}
                  component={ForgotPassword}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/validation`}
                  component={Validate}
                />
                <OtpCheck path={`${this.props.match.path}/reset`}>
                  <Route component={ResetPassword} />
                </OtpCheck>
                <Route
                  path="*"
                  render={() => <Redirect to={{ pathname: "/blank" }} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
