import * as types from "../../actions/actionTypes";

const formInitailValues = {
  origin: "email",
  name: "",
  surname: "",
  phone: "",
  email: "",
  address: "",
  postcode: "",
  city: "",
  country: "",
};

const intialState = {
  clientList: [],
  isFetching: false,
  isModalOpen: false,
  clientForm: JSON.parse(JSON.stringify(formInitailValues)),
  isSaving: false,
  isEditing: false,
  detail: {},
};

const client = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCHING_DATA:
      return { ...state, isFetching: true };
    case types.RECEIVE_CLIENTS:
      return {
        ...state,
        clientList: action.data,
        isFetching: false,
        };
    case types.GET_CLIENT_DETAIL_SUCCESS:
      return { ...state, isFetching: false, detail: action.data };
    case types.TOOGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        isEditing: false,
        clientForm: JSON.parse(JSON.stringify(formInitailValues)),
      };
    case types.SAVING_STATE:
      return { ...state, isSaving: true };
    case types.ONCHANGE_FORM:
      let formData = state.clientForm;
      formData[action.key] = action.value;
      return { ...state, clientForm: formData };
    case types.SAVED_CLIENT_DATA:
      return {
        ...state,
        isSaving: false,
        clientList: [action.data, ...state.clientList],
        isModalOpen: false,
        clientForm: JSON.parse(JSON.stringify(formInitailValues)),
      };
      case types.UPDATE_CLIENT_DATA:
        return {
          ...state,
          isSaving: false,
          isModalOpen: false,
          clientForm: JSON.parse(JSON.stringify(formInitailValues)),
          detail: action.data
        };
    case types.EDIT_CLIENT:
      return {
        ...state,
        clientForm: action.data,
        isModalOpen: true,
        isEditing: true,
      };
    case types.PREP_CLIENT_TABLE_FOR_DATA:
        return  {...state,  isFetching: true };
    default: {
      return state;
    }
  }
};
export default client;
