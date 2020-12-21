import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ForgotPassword extends Component {
  render() {
    return (
      <>
        <h2 className="main-color font-weight-bold text-center">Forgot Password?</h2>
        <span className="blur-color mt-4 mb-4 font-weight-normal text-center">
          We just need your registered e-mail address to send your password resend
        </span>
        <Form className="w-100 mb-3 mt-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4 pl-4 pr-0 input" required/>
          </Form.Group>
          
          <Link to="/auth/validation">
            <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
              Send E-mail
            </Button>
          </Link>
        </Form>
      </>
    )
  }
}
