import Axios from 'axios';
import React, { Component } from 'react';

const getUrl = 'http://34.194.133.152:4000/recipe/new';

class NewRecipe extends Component {
    state = {
        img : {},
        newRecipe: {}
    }

    getNewRecipe = () => {
        Axios
        .get(getUrl)
        .then(({data})=> {
            //console.log(JSON.parse(data[0].recipe_img)) 
            this.setState({
                img: JSON.parse(data[0].recipe_img),
                newRecipe: data[0]
                
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    componentDidMount = () => {
        this.getNewRecipe();
    }
    render() {
        const {img, newRecipe} = this.state;
        //console.log(img, newRecipe) 
        return (
            <>
                <div className="position-relative w-100 full-h d-flex flex-column pl-0 pl-xl-5 pr-0 pr-xl-5">
                <div className="dashboard-background d-flex d-md-none w-100 h-100 position-absolute">
                    <div className="w-100 h-100" style={{backgroundColor: '#000000a0'}}></div>
                    <img src={img[0]} alt="background" className="w-100 h-100 position-absolute dashboard-background" style={{objectFit: 'cover', objectPosition:'center'}}/>
                </div>
                <div className="w-100 p-0 pr-3 pr-md-0 pl-3 pl-xl-5 d-flex flex-row pt-5 mt-5">
                    <div className="d-flex justify-content-end ml-0 ml-md-3 ml-xl-0 pl-3" style={{backgroundColor: '#EFC81A'}}></div>
                    <div className="p-4 w-100 dashboard-header-text" style={{backgroundColor: '#ffffff40'}}>
                    <h2>New Recipe </h2>
                    </div>
                </div>
                <div className="position relative w-100 pl-0 pl-md-3 pl-xl-5 pr-0 pr-xl-5 pt-5 mt-5 d-flex flex-row justify-content-between h-100">
                    <div className="col-md-6 d-none d-md-flex p-0 pl-0 pl-md-3 pl-xl-0">
                    <div className="col-5 position-absolute pl-0 pb-2 dashboard-custom-new h-100" style={{zIndex:-1, left: '-100px', top:'-50px'}}>
                        <div className="w-100 h-100" style={{backgroundColor: '#EFC81A'}}></div>
                    </div>
                    <div className="dashboard-img-popular">
                        <div className="w-100 h-100">
                        <img src={img[0]} alt="popular" className="w-100 h-100 p-0" style={{objectFit: 'cover', objectPosition:'center', borderRadius:'15px'}}/>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-end pt-0 pt-md-5 mt-0 mt-md-5 p-0 pr-3 pr-xl-0">
                    <div className="col-md-12 col-lg-10 col-xl-9 d-flex flex-column align-items-start pl-3 pl-md-5">
                        <h1 className="pr-5 pr-md-0 dashboard-header-text" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}>
                        {newRecipe.recipe_name}
                        </h1>
                        <hr className="m-0 mt-4 w-25" style={{border: '2px solid lightgrey'}}/>
                        <p className="mt-4 pr-5 dashboard-header-text font-weight-medium" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}}>
                        {newRecipe.recipe_desc}
                        </p>
                        <div className="btn btn-warning btn-main clicked px-4 py-2 mt-4">
                        <span className="font-weight-medium text-dark">Learn More</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default NewRecipe
