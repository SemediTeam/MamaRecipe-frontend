import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ImgDashboard, UserIcon } from '../../assets'
import './dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <>
            <div className="d-flex">
                <div className="left">
                    <div className="d-flex header">
                        <Link className="navbar">Home</Link>
                        <Link className="navbar">Add Recipe</Link>
                        <Link className="navbar">Profile</Link>
                    </div>
                    <div className="title">
                        <div className="title-box">
                            <p className="txt-title">Discover Recipe & Delicious Food</p>
                        </div>
                        <div className="search d-flex">
                           <input className="input" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img className="icon-user" src={UserIcon} alt="" />
                </div>
                <img className="img-dashboard" src={ImgDashboard} alt=""/>
            </div>

            <div className="h-100">
                <div className="d-flex justify-content-between width-sub">
                    <div className=" d-flex align-items-center">
                        <div className="point-title"></div>
                        <h3 className="ml-3">Popular For You !</h3>
                    </div>
                    <div className="right-sub"></div>
                </div>
            </div>

                
            </>
        )
    }
}

export default Dashboard
