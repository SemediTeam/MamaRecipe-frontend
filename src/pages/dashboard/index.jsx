import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Navbar from "../../components/navbar";
import './dashboard.css'
import { SearchIcon, ImgDashboard, Popular } from "../../assets/index";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Route exact path={this.props.match.path} component={Navbar}/>
        <div className="dashboard position-absolute container-fluid p-0">
          <div className="position-relative w-100 full-h d-flex justify-content-between pl-0 pl-xl-5 pr-0">
            <div className="dashboard-background d-flex d-md-none w-100 h-100 position-absolute">
              <div className="w-100 h-100" style={{backgroundColor: '#00000080'}}></div>
              <img src={ImgDashboard} alt="background" className="w-100 h-100 position-absolute dashboard-background" style={{objectFit: 'cover', objectPosition:'center'}}/>
            </div>
            <div className="col-12 col-md-8 pl-0 pl-xl-5 pr-0 h-100 d-flex align-items-center">
              <div className="d-flex flex-column col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
                <h1 className="text-wrap text-sm-nowrap p-0 d-flex flex-column mb-4 dashboard-header-text">
                  Discover Recipe
                  <span className="text-wrap text-sm-nowrap">
                    & Delicious Food
                  </span>
                </h1>
                <div className="col-12 p-0">
                  <Form>
                    <Form.Group controlId="formSearch" className="dashboard-search d-flex flex-row align-items-center p-3 pl-4 rounded-lg">
                      <div className="col-1 p-0 mr-2 pb-1 d-flex justify-content-center">
                        <Form.Label className="m-0"><img src={SearchIcon} alt="icon"/></Form.Label>
                      </div>
                      <div className="col-11 p-0">
                        <Form.Control type="text" placeholder="Search Food, Recipes" className="pl-0 pr-0" style={{backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow:'none'}}/>
                      </div>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
            <div className="h-100 d-none d-md-flex col-md-4 pr-0 pr-xl-5 pl-0" style={{backgroundColor: '#EFC81A'}}>
              <div className="col-12 position-relative h=100 d-flex align-items-center justify-content-end pr-0 pr-xl-5 pl-0">
                <div className="dashboard-img-header">
                  <img src={ImgDashboard} alt="header" className="w-100 h-100 p-0" style={{objectFit: 'cover', objectPosition:'center', borderRadius:'15px'}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative w-100 full-h d-flex flex-column pl-0 pl-xl-5 pr-0 pr-xl-5">
            <div className="dashboard-background d-flex d-md-none w-100 h-100 position-absolute">
              <div className="w-100 h-100" style={{backgroundColor: '#000000a0'}}></div>
              <img src={Popular} alt="background" className="w-100 h-100 position-absolute dashboard-background" style={{objectFit: 'cover', objectPosition:'center'}}/>
            </div>
            <div className="w-100 p-0 pr-3 pr-md-0 pl-3 pl-xl-5 d-flex flex-row pt-5 mt-5">
              <div className="d-flex justify-content-end pl-3" style={{backgroundColor: '#EFC81A'}}></div>
              <div className="p-4 w-100 dashboard-header-text" style={{backgroundColor: '#ffffff40'}}>
                <h2>Popular For You!</h2>
              </div>
            </div>
            <div className="w-100 pl-0 pl-xl-5 pr-0 pr-xl-5 pt-5 mt-5 d-flex flex-row justify-content-between h-100">
              <div className="position relative col-md-6 d-none d-md-flex p-0 pl-3 pl-xl-0">
                <div className="dashboard-img-popular pr-3">
                  <div className="w-100 h-100 position-relative">
                    <div className="w-100 h-100 position-absolute" style={{border:'3px solid #EFC81A' , borderRadius:'15px', zIndex:-1, right: '-50px', bottom:'-50px'}}></div>
                    <img src={Popular} alt="popular" className="w-100 h-100 p-0" style={{objectFit: 'cover', objectPosition:'center', borderRadius:'15px'}}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center pt-0 pt-md-5 mt-0 mt-md-5 p-0 pr-3 pr-xl-0">
                <div className="col-md-12 col-lg-9 d-flex flex-column align-items-start pl-3 pl-md-5">
                  <h1 className="pr-5 pr-md-0 dashboard-header-text" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}>
                    Healthy Bone Broth Ramen (Quick & Easy)
                  </h1>
                  <hr className="m-0 mt-4 w-25" style={{border: '2px solid lightgrey'}}/>
                  <p className="mt-4 pr-5 dashboard-header-text" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}}>
                    Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
                  </p>
                  <div className="btn btn-warning btn-main clicked px-4 py-2 mt-4">
                    <span className="font-weight-medium text-dark">Learn More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative w-100 full-h d-flex justify-content-between pl-0 pl-xl-5 pr-0 pr-xl-5" style={{backgroundColor: 'lightgray'}}></div>
        </div>
        <div className="position-relative w-100 full-h pl-0 pl-xl-5 pr-0 pr-xl-5"></div>
        <div className="position-relative w-100 full-h pl-0 pl-xl-5 pr-0 pr-xl-5"></div>
      </>
    )
  }
}
