import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export default class ForgotPassword extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
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
    })
    // console.log(data);
    await api.post(`/auth/forgot`, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(({data})=>{
      console.log(data);
      
      this.props.history.push('/auth/validation')
    }).catch((e)=>{
      if (e.response.data.error === 'User Not Found') {
        this.setState({
          errMsg : 'Email not found'
        })
      }})
    }
  render() {
    return (
      <>
        <h2 className="main-color font-weight-bold text-center">Forgot Password?</h2>
        <span className="blur-color mt-4 mb-4 font-weight-normal text-center">
          We just need your registered e-mail address to send your password resend
        </span>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4 pl-4 pr-0 input-auth" required name="email" onChange={(e)=>{this.handlerChange(e)}}/>
          </Form.Group>
          
          {/* <Link to="/auth/validation"> */}
            <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
              Send E-mail
            </Button>
          {/* </Link> */}
        </Form>
      </>
    )
  }
}
