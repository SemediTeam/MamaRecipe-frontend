import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Recipe1, Recipe2, Recipe3, Recipe4, Recipe5, Recipe6 } from '../../../assets'

export class ListRecipe extends Component {
    render() {
        return (
            <>
            <div className="container row mt-5">
                    <div className="d-flex align-items-center col-lg-9 col-md-9 col-sm-12">
                        <div className="point mr-3"></div>
                        <h2>Popular Recipe</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-araoud flex-wrap mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <Link >
                            <div className="recipe-card shadow rounded">
                                <img className="img-card" src={Recipe1} alt=""/>
                                <div className="text-border"> 
                                    <p className="txt-card">Chiken Kare</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <Link>
                            <div className="recipe-card shadow rounded">
                                <img className="img-card" src={Recipe2} alt=""/>
                                <div className="text-border"> 
                                    <p className="txt-card">Bomb Chicken</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <Link>
                            <div className="recipe-card shadow rounded">
                                <img className="img-card" src={Recipe3} alt=""/>
                                <div className="text-border"> 
                                    <p className="txt-card">Banana Smothie Pop</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <Link>
                            <div className="recipe-card shadow rounded">
                                <img className="img-card" src={Recipe4} alt=""/>
                                <div className="text-border"> 
                                    <p className="txt-card">Coffe Lava Cake</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <Link>
                            <div className="recipe-card shadow rounded">
                                <img className="img-card" src={Recipe5} alt=""/>
                                <div className="text-border"> 
                                    <p className="txt-card">Sugar Salmon</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <Link>
                            <div className="recipe-card shadow rounded">
                                <img className="img-card" src={Recipe6} alt=""/>
                                <div className="text-border"> 
                                    <p className="txt-card">Indian Salad</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default ListRecipe
