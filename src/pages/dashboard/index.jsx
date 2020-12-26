import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Navbar from "../../components/navbar";
import './dashboard.css'
import { SearchIcon, ImgDashboard, Popular, New } from "../../assets/index";
import { Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6 } from '../../assets/index'

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
        <div className="position-relative w-100 full-h d-flex flex-column pl-0 pl-xl-5 pr-0 pr-xl-5">
          <div className="dashboard-background d-flex d-md-none w-100 h-100 position-absolute">
            <div className="w-100 h-100" style={{backgroundColor: '#000000a0'}}></div>
            <img src={Popular} alt="background" className="w-100 h-100 position-absolute dashboard-background" style={{objectFit: 'cover', objectPosition:'center'}}/>
          </div>
          <div className="w-100 p-0 pr-3 pr-md-0 pl-3 pl-xl-5 d-flex flex-row pt-5 mt-5">
            <div className="d-flex justify-content-end ml-0 ml-md-3 ml-xl-0 pl-3" style={{backgroundColor: '#EFC81A'}}></div>
            <div className="p-4 w-100 dashboard-header-text" style={{backgroundColor: '#ffffff40'}}>
              <h2>Popular For You!</h2>
            </div>
          </div>
          <div className="w-100 pl-0 pl-md-3 pl-xl-5 pr-0 pr-xl-5 pt-5 d-flex flex-row justify-content-between h-100">
            <div className="position relative col-md-6 d-none d-md-flex p-0 pl-3 pl-xl-0">
              <div className="dashboard-img-popular pr-3">
                <div className="w-100 h-100 position-relative">
                  <div className="w-100 h-100 position-absolute" style={{border:'3px solid #EFC81A' , borderRadius:'15px', zIndex:-1, right: '-50px', bottom:'-50px'}}></div>
                  <img src={Popular} alt="popular" className="w-100 h-100 p-0" style={{objectFit: 'cover', objectPosition:'center', borderRadius:'15px'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end pt-0 pt-md-5 mt-0 mt-md-5 p-0 pr-3 pr-xl-0">
              <div className="col-md-12 col-lg-10 col-xl-9 d-flex flex-column align-items-start pl-3 pl-md-5">
                <h1 className="pr-5 pr-md-0 dashboard-header-text" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}>
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h1>
                <hr className="m-0 mt-4 w-25" style={{border: '2px solid lightgrey'}}/>
                <p className="mt-4 pr-5 dashboard-header-text font-weight-medium" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}}>
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
                </p>
                <div className="btn btn-warning btn-main clicked px-4 py-2 mt-4">
                  <span className="font-weight-medium text-dark">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative w-100 full-h d-flex flex-column pl-0 pl-xl-5 pr-0 pr-xl-5">
          <div className="dashboard-background d-flex d-md-none w-100 h-100 position-absolute">
            <div className="w-100 h-100" style={{backgroundColor: '#000000a0'}}></div>
            <img src={New} alt="background" className="w-100 h-100 position-absolute dashboard-background" style={{objectFit: 'cover', objectPosition:'center'}}/>
          </div>
          <div className="w-100 p-0 pr-3 pr-md-0 pl-3 pl-xl-5 d-flex flex-row pt-5 mt-5">
            <div className="d-flex justify-content-end ml-0 ml-md-3 ml-xl-0 pl-3" style={{backgroundColor: '#EFC81A'}}></div>
            <div className="p-4 w-100 dashboard-header-text" style={{backgroundColor: '#ffffff40'}}>
              <h2>New Recipe </h2>
            </div>
          </div>
          <div className="position relative w-100 pl-0 pl-md-3 pl-xl-5 pr-0 pr-xl-5 pt-5 mt-5 d-flex flex-row justify-content-between h-100">
            <div className="col-md-6 d-none d-md-flex p-0 pl-0 pl-md-3 pl-xl-0">
              <div className="col-5 position-absolute pl-0 pb-2 dashboard-custom-new h-100" style={{zIndex:-1, left: '-100px', top:'-50px'}}>
                <div className="w-100 h-100" style={{backgroundColor: '#EFC81A'}}></div>
              </div>
              <div className="dashboard-img-popular">
                <div className="w-100 h-100">
                  <img src={New} alt="popular" className="w-100 h-100 p-0" style={{objectFit: 'cover', objectPosition:'center', borderRadius:'15px'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end pt-0 pt-md-5 mt-0 mt-md-5 p-0 pr-3 pr-xl-0">
              <div className="col-md-12 col-lg-10 col-xl-9 d-flex flex-column align-items-start pl-3 pl-md-5">
                <h1 className="pr-5 pr-md-0 dashboard-header-text" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}>
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h1>
                <hr className="m-0 mt-4 w-25" style={{border: '2px solid lightgrey'}}/>
                <p className="mt-4 pr-5 dashboard-header-text font-weight-medium" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}}>
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!
                </p>
                <div className="btn btn-warning btn-main clicked px-4 py-2 mt-4">
                  <span className="font-weight-medium text-dark">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 full-h d-flex flex-column pl-0 pl-xl-5 pr-0 pr-xl-5">
          <div className="w-100 p-0 pr-3 pr-md-0 pl-3 pl-xl-5 d-flex flex-row pt-5 mt-5">
            <div className="d-flex justify-content-end ml-0 ml-md-3 ml-xl-0 pl-3" style={{backgroundColor: '#EFC81A'}}></div>
            <div className="p-4 w-100">
              <h2>Popular Recipe</h2>
            </div>
          </div>
          <div className="w-100 p-0 pl-3 pl-xl-5 pr-3 pr-xl-5 mt-5 d-flex flex-row flex-wrap">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3">
              <div className="dashboard-item position-relative">
                <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                  <h2 className="col-10 text-dark">Chiken Kare</h2>
                  <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                  <img src={Recipe1} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3">
              <div className="dashboard-item position-relative">
                <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                  <h2 className="col-10 text-dark">Chiken Kare</h2>
                  <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                  <img src={Recipe2} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3">
              <div className="dashboard-item position-relative">
                <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                  <h2 className="col-10 text-dark">Chiken Kare</h2>
                  <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                  <img src={Recipe3} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3">
              <div className="dashboard-item position-relative">
                <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                  <h2 className="col-10 text-dark">Chiken Kare</h2>
                  <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                  <img src={Recipe4} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3">
              <div className="dashboard-item position-relative">
                <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                  <h2 className="col-10 text-dark">Chiken Kare</h2>
                  <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                  <img src={Recipe5} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3">
              <div className="dashboard-item position-relative">
                <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                  <h2 className="col-10 text-dark">Chiken Kare</h2>
                  <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                  <img src={Recipe6} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
