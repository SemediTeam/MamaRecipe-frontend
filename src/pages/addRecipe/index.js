import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import navbar from '../../components/navbar'
import './addrecipe.css'

class AddRecipe extends Component {
    render() {
        return (
            <>
                <Route path={this.props.match.path} component={navbar}/>
                <div className='container d-flex justify-content-center main-add-recipe'>
                    <form>
                        <div className="inpt-img d-flex justify-content-center align-items-center">
                        <input  placeholder="upload Image" type="file"/>
                        </div>
                        <div className="inpt-title d-flex justify-content-center pl-5">
                            <input className="add-recipe-input" placeholder="Tittle"/>
                        </div>
                        <div className="inpt-desc d-flex justify-content-center pl-5">
                            <input className="add-recipe-input" placeholder="Description"/>
                        </div>
                        <div className="inpt-ingredients d-flex justify-content-center p-5">
                            <textarea className="add-recipe-input" placeholder="Ingredients"/>
                        </div>
                        <div className="inpt-video d-flex justify-content-center align-items-center pl-5">
                            <input placeholder="Video" type="file"/>
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
