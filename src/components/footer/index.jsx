import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className="container-fluid pt-5 foot">
      <div className="d-flex h-100 flex-column align-items-center pt-0 pt-md-5">
        <div className="w-100 d-flex flex-column align-items-center mb-4 mb-md-5">
          <h1 className="text-nowrap footer-head-text">Eat, Cook, Repeat</h1>
          <p className="text-center footer-subhead-text">Share your best recipe by uploading here !</p>
        </div>
        <div className="w-100 d-flex justify-content-md-center flex-nowrap footer-text font-weight-medium mt-0">
          <div className="col-md-8 col-xl-6 d-flex justify-content-between flex-wrap flex-column flex-md-row">
            <p>Product</p>
            <p>Company</p>
            <p className=" text-nowrap">Learn More</p>
            <p className="text-nowrap">Get In Touch</p>
          </div>
        </div>
      </div>
    </div>
  )
}
