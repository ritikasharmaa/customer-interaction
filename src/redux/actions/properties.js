import * as types from "./actionTypes";

export function togglePropertiesForm() {
  return {
    type: types.TOGGLE_PROPERTIES_FORM,
  };
}
export function requestData() {
  return { type: types.SAVING_STATE };
}
export function dataSaved(json) {
  return {
    type: types.SAVED_PROPERTIES_DATA,
    data: json,
  };
}
export function onChangeFormProperties(key, value) {
  return {
    type: types.ONCHANGE_FORM_PROPERTY,
    key,
    value,
   
  };
}
export function addRooms() {
  return {
    type: types.ADD_ROOMS,
  };
}
export function removeRooms(index) {
  return {
    type: types.REMOVE_ROOMS,
    index
  };
}
export function getProperties(json) {
  return {
    type: types.GET_PROPERTIES,
    data: json,
  };
}