import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      Scroll: 'top-navbar w-100'
    }
  }

  changeBackground = async () => {
    if ( await window.scrollY  >= 80) {
      this.setState({
        Scroll: 'top-navbar active-navbar w-100'
      })
    }else{
      this.setState({
        Scroll: 'top-navbar w-100'
      })
    }
  }

  componentDidMount(){
    this.changeBackground()
  }

  componentDidUpdate(prevProps,prevState){
    if (prevState.isScroll !== this.state.isScroll) {
      this.changeBackground()
      console.log('hit');
    }
  }

  render() {
    window.addEventListener('scroll', this.changeBackground)
    return (
      <>
        <div className="w-100 mt-3"></div>
        <div className={this.state.Scroll}>
          <div className="container-fluid h-100 d-flex justify-content-between pl-xl-5 pr-xl-5">
            <div className="col-4 col-lg-3 d-none d-lg-flex align-items-center justify-content-between text-decoration-none font-weight-medium pl-0 pl-xl-5 pr-0 pr-xl-5">
              <p className="clicked m-0 mr-lg-5" onClick={(e)=>{
                e.preventDefault()
                this.props.history.push('/')
              }}>Home</p>
              <p className="clicked m-0 text-nowrap">Add Recipe</p>
              <p className="clicked m-0 ml-lg-5">Profile</p>
            </div>

          </div>
        </div>        
      </>
    )
  }
}
