import axios from 'axios';
import { getSearchItem } from "../actionType";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export const searchItemAction = (param,page,limit) => {
  return{
    type: getSearchItem,
    payload: api.get(`/search?recipe_name=${param}&page=${page || 1}&limit=${limit || 6}`)
  }
}
