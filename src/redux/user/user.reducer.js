import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  loggedIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;
