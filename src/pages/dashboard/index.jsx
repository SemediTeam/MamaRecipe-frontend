import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { ImgDashboard, SearchIcon } from "../../assets/index";
import ListRecipe from "../../components/dashboard/listRecipe";
import NewRecipe from "../../components/dashboard/newRecipe";
import PopularRecipe from "../../components/dashboard/popularRecipe";
import Navbar from "../../components/navbar";
import './dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Route path={this.props.match.path} component={Navbar}/>
        <div className="position-relative w-100 full-h d-flex align-items-center pl-0 pl-md-3 pl-xl-5 pr-0">
          <div className="dashboard-background d-flex d-md-none w-100 h-100 position-absolute">
            <div className="w-100 h-100" style={{backgroundColor: '#00000080'}}></div>
            <img src={ImgDashboard} alt="background" className="w-100 h-100 position-absolute dashboard-background" style={{objectFit: 'cover', objectPosition:'center'}}/>
          </div>
          <div className="w-100 h-100 pl-xl-5 pr-0 h-100 d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column col-12 col-sm-10 col-md-5 col-xl-4 pl-xl-0">
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
                      <Form.Control type="text" placeholder="Search Food, Recipes" className="pl-0 pr-0" 
                      style={{backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow:'none'}} 
                      onKeyPress={(e)=>{
                        if(e.target.value !== '' && e.key === 'Enter'){
                          e.preventDefault()
                          this.props.history.push({ 
                            pathname: '/search',
                            search: `name=${e.target.value}`
                          });
                        }
                      }}/>
                    </div>
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="full-h d-none d-md-flex col-md-5 col-lg-4 pr-3 pr-xl-5 pl-0" style={{backgroundColor: '#EFC81A'}}>
              <div className="col-12 position-relative h=100 d-flex align-items-center justify-content-end pr-0 pr-xl-5 pl-0">
                <div className="dashboard-img-header pr-3 pr-xl-0">
                  <img src={ImgDashboard} alt="header" className="w-100 h-100 p-0" style={{objectFit: 'cover', objectPosition:'center', borderRadius:'15px'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Route path={this.props.match.path} component={PopularRecipe}/>
        <Route path={this.props.match.path} component={NewRecipe}/>
        <Route path={this.props.match.path} component={ListRecipe}/>
        
      </>
    )
  }
}
