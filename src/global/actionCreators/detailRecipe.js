import axios from 'axios';
import { getSingleRecipe } from "../actionType";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export const singleRecipeAction = (param) => {
  return{
    type: getSingleRecipe,
    payload: api.get(`/recipe/${param}`)
  }
}