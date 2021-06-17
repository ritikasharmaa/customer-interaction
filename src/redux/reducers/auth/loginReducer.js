import * as types from "../../actions/actionTypes";


export const login = (
  state = { userRole: "admin", isLoading: false, error: false, user: {} },
  action=null
) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return { ...state, isLoading: false, error: true };

    case types.LOGIN_WITH_GOOGLE: {
        return { ...state, isLoading: false, error: false, action:"Login", user: action.data};
    };
    case types.LOGIN_REQUEST: {
      return { ...state,  isLoading: true}
    }
    case "LOGIN_WITH_EMAIL": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_FB": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_TWITTER": {
      return { ...state, values: action.payload };
    };

    case "LOGIN_WITH_GITHUB": {
      return { ...state, values: action.payload };
    }
    case "LOGIN_WITH_JWT": {
      return { ...state, values: action.payload };
    }
    case "LOGOUT_WITH_JWT": {
      return { ...state, values: action.payload };
    }
    case "LOGOUT_WITH_FIREBASE": {
      return { ...state, values: action.payload };
    }
    case "CHANGE_ROLE": {
      return { ...state, userRole: action.userRole };
    }
    default: {
      return state;
    }
  }
};
