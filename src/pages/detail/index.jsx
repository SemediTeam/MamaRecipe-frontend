import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './detail.css'
import Navbar from "../../components/navbar/index";
import { Route } from 'react-router-dom';
import { imgLoader } from "../../assets/index";
import { Button, Form } from 'react-bootstrap';


export default class Detail extends Component {
  render() {
    return (
      <>
        <Route exact path={this.props.match.path} component={Navbar}/>
        <div className="position-relative container-fluid mt-5 pl-xl-5 pr-xl-5">
          <div className="w-100 full-h d-flex justify-content-center">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9">
              <div className="w-100 d-flex flex-column align-items-center">
                <h1 className="mb-5 text-center">Loading Title ...</h1>
                <div className="position-relative col-12 col-md-11 col-lg-10 col-xl-9 mb-5 p-0">
                  <img src={imgLoader} alt="recipeImage" className="w-100 p-0 img-recipe-detail detail-rounded"/>
                  <div className="action-user position-absolute row w-50 d-flex justify-content-end">
                    <div className="detail-rounded clicked p-3 p-sm-4 mr-3" style={{backgroundColor: '#e0e0e0'}}>

                    </div>
                    <div className="detail-rounded clicked p-3 p-sm-4" style={{backgroundColor: '#e0e0e0'}}>

                    </div>
                  </div>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <h2 className="mb-5">Ingredients</h2>
                  <p className="m-0 font-weight-medium">Loading Ingredients step . . .</p>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <h2 className="mb-5">Video Step</h2>
                  <div className="btn-main detail-rounded col-12 col-md-10 col-lg-7 col-xl-4 p-4 btn btn-warning font-weight-medium">
                    Loading . . .
                  </div>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <Form className="d-flex flex-column align-items-center">
                    <Form.Group controlId="ControlTextarea" className="col-12 mb-4 detail-rounded p-4" style={{backgroundColor: '#F6F5F4'}}>
                      <Form.Label className="mb-1 font-weight-medium">Comment :</Form.Label>
                      <Form.Control as="textarea" placeholder="give your opinion here ..." rows={6} style={{backgroundColor: 'transparent', border: 'none', outline: 'none'}}/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="col-12 col-md-8 col-lg-4 btn-main pt-3 pb-3 font-weight-medium">
                      Send
                    </Button>
                  </Form>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <h2 className="mb-5">Comment</h2>
                  <div className="d-flex flex-column col-12 col-md-8 col-lg-6">
                    <div className="d-flex flex-row align-items-center">
                      <img src={imgLoader} alt="user" className="img-comments rounded-circle"/>
                      <div className="d-flex flex-column justify-content-center h-100 pl-4">
                        <h6>Loading User ...</h6>
                        <span>Loading Comment ...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
