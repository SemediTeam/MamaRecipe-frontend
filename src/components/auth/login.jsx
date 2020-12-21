import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <>
        <h2 className="main-color font-weight-bold">Welcome</h2>
        <span className="blur-color mt-4 mb-4 font-weight-normal">Log In into your existing account</span>
        <Form className="w-100 mb-3 mt-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
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
