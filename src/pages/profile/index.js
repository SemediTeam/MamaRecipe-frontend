import React, { Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { Edit, UserIcon } from '../../assets'
import Navbar from '../../components/navbar'
import { Liked, MyRecipes, Saved } from '../../components/profile'
import './profile.css'

export class Profile extends Component {
    render() {
        return (
            <>
            <Route path={this.props.match.path} component={Navbar} />
            <div className="container section-profile d-flex justify-content-center flex-column align-items-center">
                <div className="img-profile-section">
                    <img alt="user-profile" src={UserIcon} className="img-profile"/>
                    <img alt="pen-edit" src={Edit} className="edit-profile clicked" />
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
                    <Switch>
                        <Route exact path={`${this.props.match.path}`} component={MyRecipes}/>
                        <Route exact path={`${this.props.match.path}/myrecipe`} component={MyRecipes}/>
                        <Route exact path={`${this.props.match.path}/saved`} component={Saved}/>
                        <Route exact path={`${this.props.match.path}/liked`} component={Liked}/>
                        <Route path="*" render={()=>
                            <Redirect to={{ pathname: "/blank" }}/>
                        }/>
                    </Switch>
                </div>
            </div>
            </>
        )   
    }
}

export default Profile
