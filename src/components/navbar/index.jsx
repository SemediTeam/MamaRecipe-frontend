import React, { Component } from 'react'
import { UserIcon } from '../../assets/index';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './navbar.css'

import { authLogoutAction } from '../../global/actionCreators/auth';
import { connect } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class NavbarSticky extends Component {
  constructor(){
    super()
    this.state = {
      Scroll: 'top-navbar w-100',
      isBurger: false,
      burger: '',
      imgUser : JSON.parse(localStorage.getItem('token')) !== null && JSON.parse(localStorage.getItem('token')).imgUser
    }
    this._isMounted = false;
  }

  changeBackgroundBurger = () => {
    if ( this.state.isBurger ) {
      this._isMounted && this.setState({
        burger: 'active-burger full-h',
        Scroll: 'top-navbar active-navbar w-100'
      })
    }else{
      this._isMounted && this.setState({
        burger: 'deactive-burger'
      })
    }
  }

  changeBackground = () => {
    if ( window.scrollY  >= 10) {
      this._isMounted && this.setState({
        Scroll: 'top-navbar active-navbar w-100'
      })
    }else{
      this._isMounted && this.setState({
        Scroll: 'top-navbar w-100'
      })
    }
  }

  conditionalAuth = () => {
    const {auth} = this.props.auth
    if (auth.isLogin) {
      return(
        <p className="m-0 clicked text-dark" onClick={ async (e)=>{
          e.preventDefault()
          const {token} = JSON.parse(localStorage.getItem('token'))
          await api.post('/auth/logout',null,{
            headers: {
              'x-access-token': `Bearer ${token}` 
            }
          }).then(()=>{
            localStorage.removeItem('token')
            this.props.dispatch(authLogoutAction())
          }).catch((e)=>{
            console.log(e);
          })
        }}>Logout</p>
      )
    } else {
      return(
        <>
          <Link to="/auth/signin" className="m-0 clicked text-dark">SignIn</Link>
          <p className="m-0 mx-3">|</p>
          <Link to="/auth/signup" className="m-0 clicked text-dark">SignUp</Link>
        </>
      )
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this._isMounted && this.changeBackground();
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.isScroll !== this.state.isScroll) {
      this.changeBackground()
    }
    if (prevState.isBurger !== this.state.isBurger) {
      this.changeBackgroundBurger()
    }
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    const {imgUser} = this.state
    console.log(imgUser);
    window.addEventListener('scroll', this.changeBackground)
    return (
      <>
        <div className={`${this.state.Scroll} d-flex align-items-center nav-small`}>
          <Navbar collapseOnSelect expand="md" className={`w-100 pl-xl-5 pr-xl-5 py-3 py-md-2 align-items-start align-items-md-center justify-content-start justify-content-md-between ${this.state.burger}`}>
            <div className="btn btn-warning btn-main p-0">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{outline:'none'}} onClick={(e)=>{
                e.preventDefault()
                this.setState({
                  isBurger: !this.state.isBurger
                })
                this.changeBackground()
              }}/>
            </div>
            <Navbar.Collapse id="responsive-navbar-nav" className="pl-0 pl-md-3 pl-xl-5 pr-0 justify-content-md-between nav-small pt-5 pt-md-0 mt-5 mt-md-0 navbar-link-custom">
              <Nav className="mr-auto p-0 col-12 col-md-4 col-lg-3 col-xl-4 pr-0 pr-xl-5 mb-4 mb-md-0 font-weight-medium align-items-center justify-content-md-between">
                <Nav className="clicked p-0 m-0 mr-md-5 mb-4 mb-md-0" onClick={(e)=>{
                    e.preventDefault()
                    this.props.history.push('/')
                  }}>Home</Nav>
                <Nav className="clicked p-0 m-0 text-nowrap mb-4 mb-md-0" onClick={(e)=>{
                    e.preventDefault()
                    this.props.history.push('/addRecipe')
                  }}>Add Recipe</Nav>
                <Nav className="clicked p-0 m-0 ml-md-5 mb-4 mb-md-0" onClick={(e)=>{
                    e.preventDefault()
                    this.props.history.push('/profile')
                  }}>Profile</Nav>
              </Nav>
              <Nav>
                <Navbar.Brand className="col-12 d-flex d-md-none align-items-center justify-content-center text-decoration-none font-weight-medium m-0 p-0">
                  <img src={imgUser !== null ? imgUser : UserIcon} alt="user" className="rounded-circle navbar-user-icon clicked" onClick={(e)=>{e.preventDefault(); this.props.history.push('/profile')}}/>
                  <div className="d-flex flex-row flex-nowrap pl-4 pr-0 pr-md-1 pr-xl-0">
                    {this.conditionalAuth()}
                  </div>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="col-6 col-md-3 d-none d-md-flex align-items-center justify-content-end text-decoration-none font-weight-medium mr-0 pr-0 pr-md-3 pr-xl-5">
              <img src={UserIcon} alt="user" className="rounded-circle navbar-user-icon clicked" onClick={(e)=>{e.preventDefault(); this.props.history.push('/profile')}}/>
              <div className="d-flex flex-row flex-nowrap pl-4 pr-0 pr-md-1 pr-xl-0">
                {this.conditionalAuth()}
              </div>
            </Navbar.Brand>
          </Navbar>
        </div>        
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state
  }
}

export default connect(mapStateToProps)(NavbarSticky)