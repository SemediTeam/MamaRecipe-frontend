import { combineReducers } from 'redux';

import authReducer from './auth';
import searchRecipeReducer from './search';
import singleRecipeReducer from './detailRecipe';

const reducers = combineReducers({
  auth: authReducer,
  search: searchRecipeReducer,
  recipe: singleRecipeReducer,
});

export default reducers;