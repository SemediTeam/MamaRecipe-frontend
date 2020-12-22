import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ImgDashboard, SearchIcon, UserIcon } from '../../../assets'

export class Search extends Component {
    render() {
        return (
            <div className="row d-flex align-items-center">
                    <div className="col-lg-9 col-md-9 col-sm-12 left">
                        <div className="container mt-4 d-flex">
                            <Link
                             className="navbar">Home</Link>
                            <Link className="navbar">Add Recipe</Link>
                            <Link className="navbar">Profile</Link>
                        </div>
                            <div className="title-dashboard ml-3 container">
                                <h3 className="font-title-dashboard">Discover Recipe & Delicious Food</h3>
                            </div>
                            <div className="search-dashboard d-flex col-lg-6 col-md col-sm-6 ml-4">
                                <img className="search-icon-dashboard" src={SearchIcon} alt=""/>
                                <input className="input-search-dashboard" placeholder="search restaurant, food" />
                            </div>
                        </div>
                    <div className="col-lg-3 col-md-3 right">
                        <Link className="container mt-5">
                            <img className="icon-user" src={UserIcon} alt=""/>
                        </Link>
                    </div>
                    <img className="img-dashboard" src={ImgDashboard} alt="" />
                </div>
        )
    }
}

export default Search
