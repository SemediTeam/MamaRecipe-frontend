import { authLoginType, authLogoutType } from "../actionType";

const isLogin = localStorage.getItem('token') === null ? false : true;

const defaultState = {
  isLogin: isLogin
}

const authReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case authLoginType:
      return {
        ...prevState,
        isLogin: true
      }
  
    case authLogoutType:
      return {
        ...prevState,
        isLogin: false
      }
  
    default:
      return {
        ...prevState,
      }
  }
}

export default authReducer