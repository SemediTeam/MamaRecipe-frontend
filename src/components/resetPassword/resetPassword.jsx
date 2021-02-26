import Axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

const getUrl = process.env.REACT_APP_BASEURL;

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: JSON.parse(localStorage.getItem("token")).email,
      password: "",
      matchpassword: "",
      errMsg: "",
    };
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    const data = {
      password: this.state.password,
      email: this.state.email,
    };
    console.log(data);

    if (this.state.password !== this.state.matchpassword) {
      this.setState({
        errMsg: "Password isn't match with Confirm Password",
      });
    } else {
      await Axios.patch(getUrl + "/auth/reset", data)
        .then(() => {
          //this.props.history.push('/profile')
          // alert('data masok bosku')
          this.props.history.push("/profile");
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  render() {
    console.log(this.state.email, this.state.password);
    return (
      <>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Create New Password</Form.Label>
            <Form.Control
              type="password"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="password"
              required
              onChange={this.handlerChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              name="matchpassword"
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
            Reset Password
          </Button>
        </Form>
        <span
          className="w-100"
          style={{ color: "red", marginBottom: "15px", textAlign: "center" }}
        >
          {this.state.errMsg}
        </span>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps)(ResetPassword);
