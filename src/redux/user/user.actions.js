import UserActionTypes from "./user.types";

export const login = () => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
});
export const logout = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
