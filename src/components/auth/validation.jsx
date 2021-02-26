import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export default class Validate extends Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      errMsg: "",
    };
  }
  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      otp: this.state.otp,
    });
    // console.log(data);
    await api
      .post(`/auth/otp`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async ({ data }) => {
        await localStorage.setItem("otp", JSON.stringify(data.data[0].otp));
        this.setState({
          errMsg: "",
        });

        await this.props.history.push("/auth/reset");
      })
      .catch((e) => {
        if (e.response.data.error === "Wrong OTP") {
          this.setState({
            errMsg: "wrong code",
          });
        }
      });
  };
  componentDidMount() {
    localStorage.setItem("otp", "otp placeholder");
  }
  render() {
    return (
      <>
        <Form className="w-100 mb-3 mt-3" onSubmit={this.handlerSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Code 6 Digit</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter 6 digit codes"
              name="otp"
              className="pt-4 pb-4 pl-4 pr-0 input-auth"
              required
              onChange={(e) => {
                this.handlerChange(e);
              }}
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
