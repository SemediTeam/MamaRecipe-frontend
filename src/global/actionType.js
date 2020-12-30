import { ActionType } from 'redux-promise-middleware';

export const authLoginType = 'AUTH_LOGIN'
export const authLogoutType = 'AUTH_LOGOUT'
export const getSearchItem = 'GET_SEARCH_ITEMS'
export const getSingleRecipe = 'GET_SINGLE_RECIPE'
export const getBookmarkRecipe = 'GET_BOOKMARK_RECIPE'
export const getLikesRecipe = 'GET_LIKED_RECIPE'
export const getCommentRecipe = 'GET_COMMENT_RECIPE'

export const pending = `_${ActionType.Pending}`;
export const rejected = `_${ActionType.Rejected}`;
export const fulfilled = `_${ActionType.Fulfilled}`;