import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Recipe1 } from '../../assets/index';

const getUrl = 'http://localhost:4000/recipe/popular';

class ListRecipe extends Component {
    state = {
        recipe : []
    }

    getPopularRecipe = () => {
        Axios
        .get(getUrl)
        .then(({data})=> {
            this.setState({
                recipe: data
              
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    componentDidMount = () => {
        this.getPopularRecipe();
    }
    render() {
        const {recipe} = this.state
        console.log(recipe)
        return (
            <>
                <div className="w-100 full-h d-flex flex-column pl-0 pl-xl-5 pr-0 pr-xl-5">
                <div className="w-100 p-0 pr-3 pr-md-0 pl-3 pl-xl-5 d-flex flex-row pt-5 mt-5">
                    <div className="d-flex justify-content-end ml-0 ml-md-3 ml-xl-0 pl-3" style={{backgroundColor: '#EFC81A'}}></div>
                    <div className="p-4 w-100">
                    <h2>Popular Recipe</h2>
                    </div>
                </div>
                    <div className="w-100 p-0 pl-3 pl-xl-5 pr-3 pr-xl-5 mt-5 d-flex flex-row flex-wrap">
                    {recipe && recipe.map(
                        ({recipe_name, id_recipe, recipe_img}) => {
                            return(
                                    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3"  key={id_recipe}>
                                            <div className="dashboard-item position-relative" >
                                                <Link to={{pathname: "/recipe/" + id_recipe}} >
                                                    <div className="w-100 h-100 p-4 d-flex align-items-end clicked">
                                                        <h2 className="col-10 text-dark">{recipe_name}</h2>
                                                        <div className="position-absolute w-100 h-100" style={{zIndex:'-1',top: 0,left:0, backgroundColor:'#ffffff50'}}></div>
                                                        <img src={JSON.parse(recipe_img)[0]} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                                                    </div>
                                                </Link>
                                            </div>
                                    </div>
                            )
                        }
                    )}
                    </div>
                </div>  
            </>
        )
    }
}

export default ListRecipe
