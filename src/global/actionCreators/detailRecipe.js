import axios from 'axios';
import { getSingleRecipe,getBookmarkRecipe,getLikesRecipe,getCommentRecipe } from "../actionType";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export const singleRecipeAction = (param) => {
  return{
    type: getSingleRecipe,
    payload: api.get(`/recipe/${param}`)
  }
}

export const bookmarkRecipeAction = (config) => {
  return{
    type: getBookmarkRecipe,
    payload: api.get('/bookmarks',config)
  }
}

export const likedRecipeAction = (config) => {
  return{
    type: getLikesRecipe,
    payload: api.get('/likes',config)
  }
}
export const commentRecipeAction = (params) => {
  return{
    type: getCommentRecipe,
    payload: api.get(`/comments/${params}`)
  }
}