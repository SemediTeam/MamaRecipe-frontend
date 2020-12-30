import Axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import navbar from '../../components/navbar'
import './addrecipe.css'

const baseUrl = 'http://34.194.133.152:4000/recipe'

class AddRecipe extends Component {

    state = {
        images : [],
        videos : []
    }
    handlerImage = (e) => {
        this.setState({
            images : e.target.files
        })
    }

    handlerFile = (e) => {
        this.setState({
            videos : e.target.files
        })
    }

    handleUpload = (e) => {
        let x = new FormData()
        x.append("recipe_name", this.recipe_name)
        x.append("recipe_desc", this.recipe_desc)
        x.append("recipe_ingredients", this.recipe_ingredients)
        for(let i = 0; i < this.state.images.length; i++){
            x.append("images", this.state.images[i])
        }

        for(let i = 0; i < this.state.videos.length; i++){
            x.append("videos", this.state.videos[i])
        }
        for(var pair of x.entries()){
            console.log(pair[0] + ', ' + pair[1])
        }
        e.preventDefault();
        const config = {
            headers: {
                'Content-type' : 'multipart/form-data', 'x-access-token' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
            }
        }
        Axios.post(baseUrl, x, config)
        .then(({data}) => {
            console.log(data)
            this.props.history.push('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        //console.log(JSON.parse(localStorage.getItem('token')).token)
        console.log(this.state)
        return (
            <>
                <Route path={this.props.match.path} component={navbar}/>
                <div className='container d-flex justify-content-center main-add-recipe'>
                    <form onSubmit={this.handleUpload}>
                        <div className="inpt-img d-flex justify-content-center align-items-center">
                            <input placeholder="upload Image" type="file" name="images"  onChange={(e) => {this.handlerImage(e)}} multiple required />
                        </div>
                        <div className="inpt-title d-flex justify-content-center pl-5">
                            <input className="add-recipe-input" placeholder="Tittle" name="recipe_name" onChange={(e) => {this.recipe_name = e.target.value}} required  />
                        </div>
                        <div className="inpt-desc d-flex justify-content-center pl-5">
                            <input className="add-recipe-input" placeholder="Description" name="recipe_desc"  onChange={(e) => {this.recipe_desc = e.target.value}} required/>
                        </div>
                        <div className="inpt-ingredients d-flex justify-content-center p-5">
                            <textarea className="add-recipe-input" placeholder="Ingredients" name="recipe_ingredients" onChange={(e) => {this.recipe_ingredients = e.target.value}}  required/>
                        </div>
                        <div className="inpt-video d-flex justify-content-center align-items-center pl-5">
                            <input placeholder="Video" type="file" name="videos" onChange={(e) => {this.handlerFile(e)}} multiple required />
                        </div>
                        <div className="d-flex justify-content-center align-items-center pl-5">
                            <Button className="button-add-recipe" variant="warning" type="submit">Post</Button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default AddRecipe
