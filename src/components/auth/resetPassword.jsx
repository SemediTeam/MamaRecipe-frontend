import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class ResetPassword extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      matchpassword: '',
      errMsg: ''
    }
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handlerSubmit = async (e) => {
    e.preventDefault()
    const data = ({
        password : this.state.password,
        email : this.state.email,
    })
    console.log(data)

    if(this.state.password !== this.state.matchpassword){
      this.setState({
        errMsg : 'Password isn\'t match with Confirm Password'
      })
    }else{
     await api.patch('/auth/reset', data)
      .then(() => {
        //this.props.history.push('/profile')
        localStorage.removeItem('otp')
        setInterval(() => {
          this.props.history.push('/auth')
        }, 1500);
        
      })
      .catch((err) => {
        console.log(err.response)
      })
    }
  }

  render() {
    console.log(this.state.email, this.state.password)
    return (
      <>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" className="pt-4 pb-4 pl-4 pr-0 input-auth" name="email" required onChange={this.handlerChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" className="pt-4 pb-4 pl-4 pr-0 input-auth" name="password" required onChange={this.handlerChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicCPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password"  className="pt-4 pb-4 pl-4 pr-0 input-auth" name="matchpassword" required onChange={this.handlerChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" required/>
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
            Reset Password
          </Button>
        </Form>
        <span className="w-100" style={{color: 'red', marginBottom: '15px', textAlign: 'center'}}>{this.state.errMsg}</span>
      </>
    )
  }
}

export default ResetPassword