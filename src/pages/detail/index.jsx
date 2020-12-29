import React, { Component } from 'react'
import './detail.css'
import Navbar from "../../components/navbar/index";
import DetailRecipe from './detailRecipe';
import DetailVideo from './detailVideo';
import {  Route } from 'react-router-dom';
// import { Button, Form } from 'react-bootstrap';
// import { Placeholder } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { singleRecipeAction, bookmarkRecipeAction, likedRecipeAction } from '../../global/actionCreators/detailRecipe';

class Detail extends Component {

  handleGetItem = async (params,token) => {
    const {dispatch, recipe} = this.props
    if (recipe.dataRecipe.id_recipe !== Number(params)) {
      console.log('getting items ...');
      await dispatch(singleRecipeAction(params))
      
      if (token !== null) {
        const config = {
          headers: {
            'x-access-token' : 'Bearer ' + JSON.parse(token).token
          }
        }
        dispatch(bookmarkRecipeAction(config))
        dispatch(likedRecipeAction(config))
      }
      
    }else{
      console.log('not getting same data ...')
    }
  }

  componentDidMount(){
    this.handleGetItem(this.props.location.pathname.split('/')[2],localStorage.getItem('token'))
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