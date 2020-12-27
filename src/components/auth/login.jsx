import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import { authLoginAction } from '../../global/actionCreators/auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      errMsg: ''
    }
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handlerSubmit = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({
      email : this.state.email,
      password : this.state.password,
    })
    // console.log(data);
    await api.post(`/auth/login`, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(({data})=>{
      const payload = {
        id    : data.data.id_user,
        name  : data.data.name,
        email : data.data.email,
        token : data.data.tokenId
      }
      // this.props.dispatch(authLogin())
      localStorage.setItem('token', JSON.stringify(payload))
      this.props.dispatch(authLoginAction())
      this.props.history.push('/')
    }).catch((e)=>{
      if (e.response.data.error === 'User Not Found') {
        this.setState({
          errMsg : 'Email not found'
        })
      }
      if (e.response.data.error === 'Wrong Password') {
        this.setState({
          errMsg : 'Wrong Password',
          password: ''
        })
      }
    })
  }

  render() {
    return (
      <>
        <h2 className="main-color font-weight-bold">Welcome</h2>
        <span className="blur-color mt-4 mb-4 font-weight-normal text-center">Log In into your existing account</span>
        <span className="w-100" style={{color: 'red', textAlign: 'center'}}>{this.state.errMsg}</span>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4 pl-4 pr-0 input-auth" name="email" required onChange={this.handlerChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={this.state.password} className="pt-4 pb-4 pl-4 pr-0 input-auth" name="password" required onChange={this.handlerChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" required/>
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
            Log In
          </Button>
        </Form>
        <div className="w-100 d-flex flex-column">
          <div className="w-100 row justify-content-end mb-3">
            <Link to="/auth/forgotpassword" className="main-color clicked blur-color text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          <div className="w-100 row justify-content-center">
            <span className="blur-color">
              Don't have an account? <Link to="/auth/signup" className="main-color clicked text-decoration-none"> Sign Up </Link>
            </span>
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

export default connect(mapStateToProps)(Login)