import React from 'react'
import { Link } from 'react-router-dom'

export default function blankpage() {
  return (
    <div className="container-fluid full-h d-flex flex-column justify-content-center align-items-center position-absolute bg-light" style={{zIndex:99,top:0,left:0}}>
      <h1 className="p-3 text-danger text-center">404 Blank Page</h1>
      <h4 className="p-3 text-center">Nothing Special in here</h4>
      <Link className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 d-flex justify-content-center text-decoration-none btn btn-main btn-warning pt-2 pb-2 font-weight-medium text-dark" to="/">
        Go Back
      </Link>
    </div>
  )
}
