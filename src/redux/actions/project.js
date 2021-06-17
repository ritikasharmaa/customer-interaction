import * as types from "./actionTypes";

export function requestData() {
  return { type: types.SAVING_STATE };
}

export function dataSaved(json) {
  return {
    type: types.SAVED_PROJECT_DATA,
    data: json,
  };
}

export function fetchProject() {
  return {
    type: types.FETCHING_PROJECT,
  };
}

export function setProjectList(data) {
  return {
    type: types.SET_PROJECT_LIST,
    data,
  };
}

export function onChangeFormData(key, value) {
  return {
    type: types.ONCHANGE_FORM_DATA,
    key,
    value,
  };
}

export function toggleProjectModal() {
  return { type: types.TOGGLE_PROJECT_MODAL };
}

export function receiveProjectData(json) {
  return {
    type: types.GET_PROJECT_DETAIL_SUCCESS,
    data: json,
  };
}
export function updateProjectData(json) {
  return {
    type: types.UPDATE_PROJECT_DATA,
    data: json,
  };
}
export function editProject(json) {
  return {
    type: types.EDIT_PROJECT,
    data: json,
  };
}
