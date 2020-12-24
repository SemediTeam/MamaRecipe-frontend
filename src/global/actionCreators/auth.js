import { authLoginType, authLogoutType } from "../actionType";

export const authLoginAction = () => {
  return{
    type: authLoginType,
  }
}

export const authLogoutAction = () => {
  return{
    type: authLogoutType,
  }
}
