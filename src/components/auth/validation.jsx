import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

export default class Validate extends Component {
  render() {
    return (
      <>
        <Form className="w-100 mb-3 mt-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Code 6 Digit</Form.Label>
            <Form.Control type="email" placeholder="Enter 6 digit codes" className="pt-4 pb-4 pl-4 pr-0 inputauth" required/>
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
            Reset Password
          </Button>
        </Form>
      </>
    )
  }
}
