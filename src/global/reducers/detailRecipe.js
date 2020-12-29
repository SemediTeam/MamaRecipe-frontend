import { 
  getSingleRecipe,
  getBookmarkRecipe,
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

const singleRecipeReducer = (prevState = defaultState, action) => {
  // console.log(action.payload);
  // console.log(action.type);

  switch (action.type) {
    case getSingleRecipe + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getSingleRecipe + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getSingleRecipe + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        dataRecipe: action.payload.data.data,
      };
    
    case getBookmarkRecipe + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getBookmarkRecipe + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload,
      };
    case getBookmarkRecipe + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        dataBookmarks: action.payload.data.data,
      };

    default:
      return {
        ...prevState,
      };
  }
}

export default singleRecipeReducer