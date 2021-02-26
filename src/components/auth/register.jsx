import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      matchPass: "",
      errMsg: "",
    };
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (event) => {
    event.preventDefault();
    const mailer = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]/;
    const passer = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    const data = JSON.stringify({
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
    });

    if (this.state.password !== this.state.matchPass) {
      this.setState({
        errMsg: "Password isn't match with Confirm Password",
      });
    } else if (this.state.password === "" || !this.state.password.match(passer)) {
      this.setState({
        errMsg:
          "Password must contain at least 1 number, and be longer than 8 character",
      });
    } else if (!this.state.email.match(mailer)) {
      this.setState({ errMsg: "Invalid email format, ex: user@domain.com" });
    } else {
      this.setState({
        errMsg: "Please wait..",
      });
      await api
        .post(`/auth/register`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          // console.log('succsess create new data');
          this.props.history.push("/auth/signin");
        })
        .catch((e) => {
          if (e.response.data.error === "Email already in use!") {
            this.setState({
              errMsg: "Email is already registred",
            });
          } else if (e.response.data.error.code === "EAUTH") {
            console.log("its okay data success created");
            this.props.history.push("/auth/signin");
          } else {
            this.setState({
              errMsg: "Something went wrong",
            });
          }
        });
    }
  };

  render() {
    return (
      <>
        <h2 className="main-color font-weight-bold text-center">
          Let’s Get Started !
        </h2>
        <span className="blur-color mt-4 mb-4 font-weight-normal text-center">
          Create new account to access all features
        </span>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="name"
              required
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="email"
              required
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="08xxxxxxxxxx"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="phone"
              required
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create New Password"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="password"
              required
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="matchPass"
              required
              onChange={this.handlerChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to terms & conditions"
              required
            />
          </Form.Group>
          <Button
            variant="warning"
            type="submit"
            className="w-100 btn-main pt-2 pb-2 font-weight-medium"
          >
            Register Account
          </Button>
        </Form>
        <span
          className="w-100"
          style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
        >
          {this.state.errMsg}
        </span>
        <div className="w-100 d-flex flex-column">
          <div className="w-100 row justify-content-center">
            <span className="blur-color">
              Already have account?{" "}
              <Link
                to="/auth/signin"
                className="main-color clicked text-decoration-none"
              >
                {" "}
                Log in Here{" "}
              </Link>
            </span>
          </div>
        </div>
      </>
    );
  }
}
