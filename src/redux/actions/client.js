import * as types from "./actionTypes";

export function requestData() {
  return { type: types.SAVING_STATE };
}

export function receiveListOfClient(json) {
  return {
    type: types.RECEIVE_CLIENTS,
    data: json,
  };
}

export function dataSaved(json) {
  return {
    type: types.SAVED_CLIENT_DATA,
    data: json,
  };
}

export function fetchData() {
  return {
    type: types.FETCHING_DATA,
  };
}

export function toogleClientModal() {
  return {
    type: types.TOOGLE_MODAL,
  };
}

export function onChangeForm(key, value) {
  return {
    type: types.ONCHANGE_FORM,
    key,
    value,
  };
}

export function receiveClientData(json) {
  return {
    type: types.GET_CLIENT_DETAIL_SUCCESS,
    data: json,
  };
}

export function editClient(json) {
  return {
    type: types.EDIT_CLIENT,
    data: json,
  };
}

export function prepClientTableForData() {
  return { type: types.PREP_PROPOSAL_TABLE_FOR_DATA };
}

export function updateClientData (json) {
  return {
    type: types.UPDATE_CLIENT_DATA,
    data: json
  }
}

export function deleteClientData(json) {
  return {
      type: types.DELETED_CLIENT_DATA,
      data: json,
  };
}
