import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';



class ResetPassword extends Component {
  constructor(){
    super()
    this.state = {
      createPassword: '',
      newPassword: '',
    }
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

 
  render() {
    return (
      <>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Create New Password</Form.Label>
            <Form.Control type="password" className="pt-4 pb-4 pl-4 pr-0 input-auth" name="email" required onChange={this.handlerChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" value={this.state.password} className="pt-4 pb-4 pl-4 pr-0 input-auth" name="password" required onChange={this.handlerChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" required/>
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
            Reset Password
          </Button>
        </Form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state
  }
}

export default connect(mapStateToProps)(ResetPassword)