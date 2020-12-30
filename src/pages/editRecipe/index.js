import Axios from 'axios'
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import navbar from '../../components/navbar'
import './editrecipe.css'

const baseUrl = 'http://34.194.133.152:4000/recipe/'

class EditRecipe extends Component {

    constructor(props){
        super(props)
            this.state = {
                id_recipe : props.match.params.id,
                recipe_img : null,
                recipe_name: '',
                recipe_desc: '',
                recipe_ingredients: '',
                recipe_video: null
            }
        }

    getRecipetId = () => {
        const id = this.state.id_recipe
        Axios.get(baseUrl + id)
        .then(({data}) => {
            console.log(data)
            this.setState({
                //recipe_img : JSON.parse(data.data.recipe_img),
                recipe_name: data.data.recipe_name,
                recipe_desc: data.data.recipe_desc,
                recipe_ingredients: data.data.recipe_ingredients,
                // recipe_video: JSON.parse(data.data.recipe_video)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    handlerImage = (e) => {
        const file = e.target.files
        this.setState({
            recipe_img : file
        })
    }

    handlerFile = (e) => {
        this.setState({
            recipe_video : `${e.target.value}`
        })
    }

    handlerChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
      }

    updateRecipe = async (e) => {
        e.preventDefault();
        const id = this.state.id_recipe
        const config = {
            headers: {
                'Content-type' : 'multipart/form-data', 'x-access-token' : 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
            }
        }
        let x = new FormData()
        x.append("recipe_name", this.state.recipe_name)
        x.append("recipe_desc", this.state.recipe_desc)
        x.append("recipe_ingredients", this.state.recipe_ingredients)
        if(this.state.recipe_img !== null){
            x.append("recipe_img",this.state.recipe_img[0].name)
        }
        
        console.log(this.state.recipe_img[0].name)

        if(this.state.recipe_video !== null){
            for(let i = 0; i < this.state.recipe_video.length; i++){
                x.append("recipe_video", this.state.recipe_video[i])
            }
        }
        await Axios.patch(baseUrl + id, x, config)
        .then((res) => {
            //this.props.history.push('/profile')
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(x)
    }

    componentDidMount = () => {
        this.getRecipetId();
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Route path={this.props.match.path} component={navbar}/>
                <div className='container d-flex justify-content-center main-add-recipe'>
                    <form className="position-relative" onSubmit={this.updateRecipe}>
                        <div className="inpt-img d-flex justify-content-center align-items-center position-relative ">
                            <input placeholder="upload Image" type="file" name="recipe_img" onChange={this.handlerImage} />
                        </div>
                        <div className="inpt-title d-flex justify-content-center pl-5">
                            <input className="add-recipe-input" name="recipe_name" placeholder={this.state.recipe_name} onChange={this.handlerChange} />
                        </div>
                        <div className="inpt-desc d-flex justify-content-center pl-5">
                            <input className="add-recipe-input" placeholder={this.state.recipe_desc} name="recipe_desc" onChange={this.handlerChange} />
                        </div>
                        <div className="inpt-ingredients d-flex justify-content-center p-5">
                            <textarea className="add-recipe-input" placeholder={this.state.recipe_ingredients} name="recipe_ingredients" onChange={this.handlerChange} />
                        </div>
                        <div className="inpt-video d-flex justify-content-center align-items-center pl-5">
                            <input placeholder="Video" type="file" name="recipe_video" onChange={(e) => {
                                const file = e.target.files;
                                this.setState({recipe_video: file})
                            }}  multiple/>
                        </div>
                        <div className="d-flex justify-content-center align-items-center pl-5">
                            <Button  className="button-add-recipe" variant="warning" type="submit">Post</Button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default EditRecipe
