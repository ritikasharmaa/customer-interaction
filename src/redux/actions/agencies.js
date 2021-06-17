import * as types from "./actionTypes";

export function fetchDataAgencies() {
  return {
    type: types.FETCHING_DATA_AGENCIES,
  };
}

export function getAgenciesData(json) {
  return {
    type: types.GET_AGENCIES,
    data: json,
  };
}
export function toggleAgenciesModal() {
  return {
    type: types.TOGGLE_AGENCIES_MODAL,
  };
}
export function requestDataAgencies() {
  return { type: types.SAVING_STATE_AGENCIES };
}
export function dataSavedAgencies(json) {
  return {
    type: types.SAVED_AGENCIES_DATA,
    data: json,
  };
}
export function onChangeFormAgencies(key, value) {
  return {
    type: types.ONCHANGE_FORM_AGENCIES,
    key,
    value,
  };
}
export function receiveAgenciesData(json) {
  return {
    type: types.GET_AGENCIES_DETAIL_SUCCESS,
    data: json,
  };
}
export function editAgencies(json){
  return {
    type:types.EDIT_AGENCIES,
    data: json,
  }
}
export function updateAgenciesData (json) {
  return {
    type: types.UPDATE_AGENCIES_DATA,
    data: json
  }
}