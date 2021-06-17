import * as types from "../../actions/actionTypes";
const formInitailValues = {
  name: "",
  legalInfos: " ",
  director: " "
};
const intialState = {
  agenciesList: [],
  isFetching: false,
  isModalOpen: false,
  editorState:"",
  agenciesForm: JSON.parse(JSON.stringify(formInitailValues)),
  detail:{}
};

const agencies = (state = intialState, action) => {
  switch (action.type) {
    case types.FETCHING_DATA_AGENCIES:
      return { ...state, isFetching: true };
    case types.GET_AGENCIES:
      return {
        ...state,
        agenciesList: action.data,
        isFetching: false,
      };
    case types.TOGGLE_AGENCIES_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case types.SAVING_STATE_AGENCIES:
      return { ...state, isSaving: true };
    case types.ONCHANGE_FORM_AGENCIES:
      let formData = state.agenciesForm;
        formData[action.key] = action.value;
      return { ...state, agenciesForm: formData };
    case types.SAVED_AGENCIES_DATA:
      return {
        ...state,
        isSaving: false,
        agenciesList: [action.data, ...state.agenciesList],
        isModalOpen: false,
        agenciesForm: JSON.parse(JSON.stringify(formInitailValues)),
      };
      case types.GET_AGENCIES_DETAIL_SUCCESS:
        return { ...state, isFetching: false, detail: action.data };
        case types.EDIT_AGENCIES:
          return {
            ...state,
            agenciesForm: action.data,
            isModalOpen: true,
            isEditing: true,
          };
          case types.UPDATE_AGENCIES_DATA:
            return {
              ...state,
              isSaving: false,
              isModalOpen: false,
              agenciesForm: JSON.parse(JSON.stringify(formInitailValues)),
              detail: action.data
            };
    default: {
      return state;
    }
  }
};
export default agencies;
