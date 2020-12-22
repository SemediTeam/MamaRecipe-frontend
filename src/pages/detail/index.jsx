import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './detail.css'
import Navbar from "../../components/navbar/index";
import { Route } from 'react-router-dom';


export default class Detail extends Component {
  render() {
    return (
      <>
        <Route exact path={this.props.match.path} component={Navbar} />
        <div className="position-relative container-fluid mt-5 pl-lg-5 pr-lg-5">
          <div className="w-100 full-h d-flex justify-content-center">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9" style={{backgroundColor:'#606060'}}>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}
