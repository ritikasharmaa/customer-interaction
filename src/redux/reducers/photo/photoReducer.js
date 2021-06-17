import * as types from "../../actions/actionTypes";

const formInitailValues = {
  label: "",
  active: false,
  type: "client",
  file: "",
};

const intialState = {
  photoForm: JSON.parse(JSON.stringify(formInitailValues)),
  isModalOpen: false,
  isSaving: false,
  photoList: [],
  isEditing: false,
  detailPhoto: {},
};

const photo = (state = intialState, action) => {
  switch (action.type) {
    case types.TOOGLE_PHOTO_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen, isEditing: false };
    case types.ONCHANGE_PHOTO_FORM:
      let formData = state.photoForm;
      formData[action.key] = action.value;
      // if(formData.file?.length > 1){
      //   formData.label = '';
      //    formData.active = false
      // }
      return { ...state, photoForm: formData };
    case types.SAVING_STATE_PHOTO:
      return { ...state, isSaving: true };
    case types.SAVED_PHOTO_DATA:
      return {
        ...state,
        isSaving: false,
        photoList: [action.data, ...state.photoList],
        isModalOpen: false,
        photoForm: JSON.parse(JSON.stringify(formInitailValues)),
      };
    case types.FETCHING_PHOTO:
      return { ...state, isFetching: true };
    case types.SET_PHOTO_LIST:
      return { ...state, isFetching: false, photoList: action.data };
    case types.RECEIVE_PHOTO:
      return {
        ...state,
        photoList: action.data,
        isFetching: false,
      };
    case types.UPDATE_PHOTO_DATA:
      return {
        ...state,
        isSaving: false,
        isModalOpen: false,
        photoForm: formInitailValues,
        detailPhoto: action.data,
      };
    case types.EDIT_PHOTO:
      return {
        ...state,
        photoForm: action.data,
        isModalOpen: true,
        isEditing: true,
      };
    default: {
      return state;
    }
  }
};
export default photo;
