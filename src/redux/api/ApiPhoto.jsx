import * as main from "../../main";
import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import {
  updatePhotoData,
  setPhotoList,
  requestPhotoData,
  dataSavedPhoto,
  deletePhotoData
} from "../actions/photo";
import swal from "sweetalert";

import { store } from "../storeConfig/store";

const { dispatch } = store;

export const apiSavePhoto = (photo) => {
  var body = JSON.parse(JSON.stringify(photo));
  var options = GenerateOptions("photos", "post", body);
  return (dispatch) => {
    dispatch(requestPhotoData());
    return MakeTheApiCall(options)
      .then((response) => {
        console.log(response, "reds")
        dispatch(dataSavedPhoto(response.data));
        swal({
          text: "Saved Successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: "Error!",
          icon: "warning",
        });
        return error.response;
      });
  };
};
export const apiGetPhoto = () => {
  var options = GenerateOptions("photos");
  return (dispatch) => {
    dispatch(requestPhotoData());
    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(setPhotoList(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};
export const apiDeleteData = (id) => {
  var options = GenerateOptions(`photos/${id}`, "delete");
  return (dispatch) => {
    dispatch(requestPhotoData());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(deletePhotoData(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};
export const apiUpdatePhotos = (photo, id) => {
  var body = JSON.parse(JSON.stringify(photo));
  var options = GenerateOptions(`photos/${id}`, "patch", body);
  return (dispatch) => {
    dispatch(requestPhotoData());

    return MakeTheApiCall(options)
      .then((response) => {
        console.log(response, "res");
        dispatch(updatePhotoData(response.data));
        swal({
          text: "Updated Successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: "Error!",
          icon: "warning",
        });
        return error.data;
      });
  };
};