import { ActionType } from 'redux-promise-middleware';

export const authLoginType = 'AUTH_LOGIN'
export const authLogoutType = 'AUTH_LOGOUT'
export const getSearchItem = 'GET_SEARCH_ITEMS'

export const pending = `_${ActionType.Pending}`;
export const rejected = `_${ActionType.Rejected}`;
export const fulfilled = `_${ActionType.Fulfilled}`;