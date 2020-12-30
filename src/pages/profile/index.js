import Axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import { Edit, UserIcon } from '../../assets'
import Navbar from '../../components/navbar'
import { Liked, MyRecipes, Saved } from '../../components/profile'
import Footer from '../../components/footer';
import './profile.css'


const getUrl = 'http://34.194.133.152:4000/user/'
const urlUpdate = 'http://34.194.133.152:4000/user/img/'

export class Profile extends Component {
    constructor(){
        super();
        this.state = {
            profile : {},
            user_img: [],
            isHidden : true,
           
        }
    }

    getProfileData = () => {
        const id = JSON.parse(localStorage.getItem('token')).id
        const config = {
            headers: {
                'Content-type' : 'multipart/form-data', 'x-access-token' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
                }
            }
        Axios
        .get(getUrl + id, config)
        .then(({data}) => {
            //console.log(data)
            this.setState({
                profile: data.data[0]
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    componentDidMount = () => {
        this.getProfileData();
    }

    handleUpload = (e) => {
        let x = new FormData()
        for(let i = 0; i < e.target.files.length; i++){
            x.append("user_img", e.target.files[i])
        }
        e.preventDefault();
        const config = {
            headers: {
                'Content-type' : 'multipart/form-data', 'x-access-token' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
            }
        }
        
        const id =  JSON.parse(localStorage.getItem('token')).id
        Axios.patch(urlUpdate + id, x, config)
        .then((data) => {
            this.getProfileData()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    render() {
        const {profile} = this.state
        return (
            <>
            <Route path={this.props.match.path} component={Navbar} />
            {localStorage.getItem('token').name ===  null ? (
                <div className="container section-profile d-flex justify-content-center flex-column align-items-center">
                    <div className="img-profile-section">
                        <img alt="user-profile" src={UserIcon} className="img-profile"/>
                        <img alt="pen-edit" src={Edit} className="edit-profile clicked" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-center">loading profile ...</h2>
                    </div>
                </div>
            ):(
                <div className="container section-profile d-flex justify-content-center flex-column align-items-center">
                    <div className="img-profile-section">
                        <img alt="user-profile" src={profile.user_img} className="img-profile"/>
                        <img alt="pen-edit" src={Edit} className="edit-profile clicked" onClick={() => {this.setState({
                            isHidden : !this.state.isHidden
                        })}} />
                    </div>
                    {this.state.isHidden ? (
                        <div className="mt-4">
                            <h2 className="text-center">{profile.name}</h2>
                        </div>
                    ): (
                        <div className="update-photo-pass mt-3 ">
                            <form className="w-100">
                                <div className="button-wrap">
                                    <label className="button" for="upload">Change Photo</label>
                                    <input className="inpt-update-user input-profile" id="upload" type="file" onChange={(e) => {this.handleUpload(e)}}/>
                                </div>
                            </form>
                            <div className="w-100 d-flex justify-content-center"> 
                                <Link to="/resetPassword" className="text-decoration-none txt-change-pass">Change Password</Link>
                            </div>
                        </div>
                    )}
                    



                </div>
            )}
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
            <Route path={this.props.match.path} component={Footer}/>
            </>
        )   
    }
}

export default Profile
