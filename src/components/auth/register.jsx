import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
    // handleForm = () => {
    //   this.setState({

    //   })
    // }
  }
  render() {
    return (
      <>
        <h2 className="main-color font-weight-bold text-center">Let’s Get Started !</h2>
        <span className="blur-color mt-4 mb-4 font-weight-normal text-center">Create new account to access all features</span>
        <Form className="w-100 mb-3 mt-3">
          <Form.Group controlId="formBasicText">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>
          <Form.Group controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="08xxxxxxxxxx" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create New Password</Form.Label>
            <Form.Control type="password" placeholder="Create New Password" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" required/>
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
            Register Account
          </Button>
        </Form>
        <div className="w-100 d-flex flex-column">
          <div className="w-100 row justify-content-center">
            <span className="blur-color">
            Already have account? <Link to="/auth/signin" className="main-color clicked text-decoration-none"> Log in Here </Link>
            </span>
          </div>
        </div>
      </>
    )
  }
}
