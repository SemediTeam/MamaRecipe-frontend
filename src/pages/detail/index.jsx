import React, { Component } from 'react'
import './detail.css'
import Navbar from "../../components/navbar/index";
import DetailRecipe from './detailRecipe';
import DetailVideo from './detailVideo';
import {  Route } from 'react-router-dom';
// import { Button, Form } from 'react-bootstrap';
// import { Placeholder } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { singleRecipeAction, bookmarkRecipeAction } from '../../global/actionCreators/detailRecipe';

class Detail extends Component {

  handleGetItem = (params) => {
    const {dispatch, recipe} = this.props
    if (recipe.dataRecipe.id_recipe !== params) {
      dispatch(singleRecipeAction(params))
    }
  }

  handleGetBookmark = (params) => {
    const config = {
      headers: {
        'x-access-token' : 'Bearer ' + JSON.parse(params).token
      }
  }
    this.props.dispatch(bookmarkRecipeAction(config))
  }

  componentDidMount(){
    this.handleGetItem(this.props.location.pathname.split('/')[2])
    this.handleGetBookmark(localStorage.getItem('token'))
  }
  render() {
    const recipeId = this.props.recipe.dataRecipe.id_recipe
    // console.log(this.props.match.path);
    return (
      <>
        <Route path={this.props.match.path} component={Navbar}/>
        <Route exact path={`${this.props.match.path}/${recipeId}`} component={DetailRecipe}/>
        <Route exact path={`${this.props.match.path}/${recipeId}/:id`} component={DetailVideo}/>
      </>
    )
  }
}
const mapStateToProps = ({recipe}) => {
  return{
    recipe
  }
}

export default connect(mapStateToProps)(Detail)