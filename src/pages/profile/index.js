import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Edit, imgLoader, UserIcon } from '../../assets'
import Navbar from '../../components/navbar'
import './profile.css'

export class Profile extends Component {
    render() {
        return (
            <>
            <Route exact path={this.props.match.path} component={Navbar} />
            <div className="container section-profile d-flex justify-content-center flex-column align-items-center">
                <div className="img-profile-section">
                    <img alt="user-profile" src={UserIcon} className="img-profile"/>
                    <Link>
                        <img alt="pen-edit" src={Edit} className="edit-profile" />
                    </Link>
                </div>
                <div className="mt-4">
                    <h2 className="text-center">loading profile ...</h2>
                </div>
            </div>
            <div className="container-fluid pl-xl-5 pr-xl-5">
                <div className="col-md-5 col-lg-4 col-xl=3 d-flex flex-column flex-sm-row justify-content-between pl-3 pl-xl-5 pr-3 pr-xl-5">
                    <Link to="/profile/myrecipe" className="txt-profile font-weight-medium clicked text-decoration-none text-nowrap mb-3 mb-sm-0 mr-md-4 mr-lg-5 text-center">My Recipe</Link>
                    <Link to="/profile/saved" className="txt-profile font-weight-medium clicked text-decoration-none text-nowrap mb-3 mb-sm-0 text-center">Saved Recipe</Link>
                    <Link to="/profile/liked" className="txt-profile font-weight-medium clicked text-decoration-none text-nowrap mb-3 mb-sm-0 ml-md-4 ml-lg-5 text-center">Liked Recipe</Link>
                </div>
            </div>
            <div className="row line"></div>
            <div className="container-fluid pl-xl-5 pr-xl-5 mt-4">
                <div className="pl-0 pl-xl-4 pr-0 pr-xl-4 d-flex flex-wrap">
                    <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
                        <div className="position-relative img-recipe-profile clicked">
                            <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                            <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                            <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
                        <div className="position-relative img-recipe-profile clicked">
                            <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                            <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                            <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
                        <div className="position-relative img-recipe-profile clicked">
                            <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                            <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                            <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
                        <div className="position-relative img-recipe-profile clicked">
                            <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                            <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                            <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )   
    }
}

export default Profile
