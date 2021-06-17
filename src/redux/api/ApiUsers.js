import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import {
    getUserData,
  fetchDataUser,
  receiveUsersData
} from "../actions/users";
import swal from "sweetalert";

import { store } from "../storeConfig/store";

const { dispatch } = store;

/*api methods*/
export const apiGetUsers = () => {
    var options = GenerateOptions("users");
    return (dispatch) => {
      dispatch(fetchDataUser());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(getUserData(response.data));
        })
        .catch((error) => {
          return error.data;
        });
    };
  };
  export const apiGetUsersData = (id) => {
    var options = GenerateOptions(`users/${id}`, "get");
    return (dispatch) => {
      dispatch(fetchDataUser());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(receiveUsersData(response.data));
        })
        .catch((error) => {
          return error.data;
        });
    };
  };