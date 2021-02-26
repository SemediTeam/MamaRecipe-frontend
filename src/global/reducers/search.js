import { 
  getSearchItem,
  fulfilled,
  pending,
  rejected
 } from '../actionType';

const defaultState = {
  dataRecipe: {},
  err: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
}

const searchRecipeReducer = (prevState = defaultState, action) => {
  // console.log(action.payload);
  // console.log(action.type);

  switch (action.type) {
    case getSearchItem + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getSearchItem + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
        dataRecipe: {},
      };
    case getSearchItem + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        dataRecipe: action.payload.data,
      };
    default:
      return {
        ...prevState,
      };
  }
}

export default searchRecipeReducer