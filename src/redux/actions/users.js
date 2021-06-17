import * as types from "./actionTypes";

export function fetchDataUser() {
    return {
      type: types.FETCHING_DATA_USER,
    };
  }
 
  export function getUserData(json) {
    return {
      type: types.GET_USER,
      data: json,
    };
  }

  export function receiveUsersData(json) {
    return {
      type: types.GET_USER_DETAIL_SUCCESS,
      data: json,
    };
  }
  export function editUserAgencies(json){
    return {
      type:types.EDIT_USER_AGENCIES,
      data: json,
    }
  }
  export function toggleUserModal() {
    return {
      type: types.TOGGLE_USER_MODAL,
    };
  }
  export function requestDataUser() {
    return { type: types.SAVING_STATE_USER };
  }
  export function dataSavedUser(json) {
    return {
      type: types.SAVED_USER_DATA,
      data: json,
    };
  }
  export function onChangeFormUser(key, value) {
    return {
      type: types.ONCHANGE_FORM_USER,
      key,
      value,
    };
  }