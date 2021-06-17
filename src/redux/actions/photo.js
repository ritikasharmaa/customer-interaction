import * as types from "./actionTypes";

export function togglePhotoModal() {
    return {
      type: types.TOOGLE_PHOTO_MODAL,
    };
  }
  export function onChangePhoto(key, value){
    return {
      type: types.ONCHANGE_PHOTO_FORM,
      key,
      value
    }
  }
  export function requestPhotoData() {
    return { type: types.SAVING_STATE_PHOTO };
  }
  
  export function dataSavedPhoto(json) {
    return {
      type: types.SAVED_PHOTO_DATA,
      data: json,
    };
  }
  export function fetchDataPhoto() {
    return {
      type: types.FETCHING_PHOTO,
    };
  }
  export function receiveListOfPhoto(json) {
    return {
      type: types.RECEIVE_PHOTO,
      data: json,
    };
  }
  export function setPhotoList(json){
    return{
      type: types.SET_PHOTO_LIST,
      data:json
    }
  }
  export function editPhoto(json){
    return {
      type:types.EDIT_PHOTO,
      data: json,
    }
  }
  export function deletePhotoData(json) {
    return {
        type: types.DELETED_PHOTO_DATA,
        data: json,
    };
  }
  export function updatePhotoData(json) {
    return {
      type: types.UPDATE_PHOTO_DATA,
      data: json,
    };
  }