import React, { Component } from 'react'
import { UserIcon } from '../../assets/index';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './navbar.css'

import { authLogoutAction } from '../../global/actionCreators/auth';
import { connect } from 'react-redux';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      Scroll: 'top-navbar w-100'
    }
    this._isMounted = false;
  }

  changeBackground = async () => {
    if ( await window.scrollY  >= 80) {
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
          await api.post('auth/logout',null,{
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
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    window.addEventListener('scroll', this.changeBackground)
    return (
      <>
        <div className="w-100 mt-3"></div>
        <div className={this.state.Scroll}>
          <div className="container-fluid h-100 d-flex justify-content-end justify-content-lg-between pl-xl-5 pr-xl-5">
            <div className="col-4 col-lg-3 d-none d-lg-flex align-items-center justify-content-between text-decoration-none font-weight-medium pl-0 pl-xl-5 pr-0 pr-xl-5">
              <p className="clicked m-0 mr-lg-5" onClick={(e)=>{
                e.preventDefault()
                this.props.history.push('/')
              }}>Home</p>
              <p className="clicked m-0 text-nowrap">Add Recipe</p>
              <p className="clicked m-0 ml-lg-5" onClick={(e)=>{
                e.preventDefault()
                this.props.history.push('/profile')
              }}>Profile</p>
            </div>
            <div className="col-4 col-lg-3 d-none d-md-flex align-items-center justify-content-end text-decoration-none font-weight-medium pr-0 pr-xl-5">
              <img src={UserIcon} alt="user" className="rounded-circle navbar-user-icon clicked" onClick={(e)=>{e.preventDefault(); this.props.history.push('/profile')}}/>
              <div className="d-flex flex-row flex-nowrap pl-4 pr-3 pr-xl-0">
                {this.conditionalAuth()}
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps)(Navbar)