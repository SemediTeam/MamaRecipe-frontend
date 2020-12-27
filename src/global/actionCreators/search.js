import axios from 'axios';
import { getSearchItem } from "../actionType";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

export const searchItemAction = (param) => {
  return{
    type: getSearchItem,
    payload: api.get(`/search?recipe_name=${param}&page=1&limit=6`)
  }
}
