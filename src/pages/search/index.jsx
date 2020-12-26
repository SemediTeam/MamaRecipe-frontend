import React from 'react'
import { Form } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Navbar from "../../components/navbar";
import './search.css';

export default function Search(props) {
  console.log(props);
  const search = props.location.search;
  const name = new URLSearchParams(search).get("name");
  console.log(name);
  return (
    <>
      <Route path={props.match.path} component={Navbar}/>
      <div className="search position-absolute container-fluid px-xl-5 pt-0 pt-md-5 full-h">
        {/* <div className="px-xl-5 w-100 pt-3 pt-md-5 d-flex justify-content-between flex-wrap">
          <p className="blur-color font-weight-medium">Getting 100 items from result</p>
          <Form.Control type="text" placeholder="Search Food, Recipes" className="col-12 col-md-6"/>
        </div>
        <hr className="w-100 row mb-4" style={{border:'solid 2px #ededed'}}/> */}
      </div>
    </>
  )
}
