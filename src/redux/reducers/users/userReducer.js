import * as types from "../../actions/actionTypes";
const formInitailValues ={
  name: ""
}
const intialState = {
  userList: [],
  isFetching: false,
  detail: {},
  userForm: formInitailValues
};

const user = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCHING_DATA_USER:
      return { ...state, isFetching: true };
    case types.GET_USER:
      return {
        ...state,
        userList: action.data,
        isFetching: false,
      };
    case types.GET_USER_DETAIL_SUCCESS:
      return { ...state, isFetching: false, detail: action.data };
      case types.TOGGLE_USER_MODAL:
        return {
          ...state,
          isModalOpen: !state.isModalOpen,
        };
        case types.SAVING_STATE_USER:
          return { ...state, isSaving: true };
        case types.ONCHANGE_FORM_USER:
          let formData = state.userForm;
            formData[action.key] = action.value;
          return { ...state, userForm: formData };
        case types.SAVED_USER_DATA:
          return {
            ...state,
            isSaving: false,
            userList: [action.data, ...state.userList],
            isModalOpen: false,
            userForm: JSON.parse(JSON.stringify(formInitailValues)),
          };
    default: {
      return state;
    }
  }
};
export default user;
