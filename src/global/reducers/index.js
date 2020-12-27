import { combineReducers } from 'redux';

import authReducer from './auth';
import searchRecipeReducer from './search';

const reducers = combineReducers({
  auth: authReducer,
  search: searchRecipeReducer,
});

export default reducers;