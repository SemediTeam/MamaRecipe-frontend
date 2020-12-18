import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ImgDashboard, UserIcon } from '../../assets'
import './dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <>
            <div className="d-flex main-page">
                <div className="left">
                    <div className="d-flex header">
                        <Link className="navbar">Home</Link>
                        <Link className="navbar">Add Recipe</Link>
                        <Link className="navbar">Profile</Link>
                    </div>
                </div>
                <div className="right">
                    <img className="header-right" src={UserIcon} alt="" />
                </div>
                <img className="img-dashboard" src={ImgDashboard} alt="" />

            </div>
           
            <div className="d-flex">
               <div className="left">asdfsdfsdf</div>
               <div className="right">asdfasdfasdfasdf</div>
           </div>
            </>
        )
    }
}

export default Dashboard
