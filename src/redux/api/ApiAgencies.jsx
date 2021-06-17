import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import {
    getAgenciesData,
    fetchDataAgencies,
    dataSavedAgencies,
    requestDataAgencies,
    receiveAgenciesData,
    updateAgenciesData
} from "../actions/agencies";
import swal from "sweetalert";

import { store } from "../storeConfig/store";

const { dispatch } = store;

/*api methods*/
export const apiGetAgencies = () => {
    var options = GenerateOptions("agencies");
    return (dispatch) => {
      dispatch(fetchDataAgencies());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(getAgenciesData(response.data));
        })
        .catch((error) => {
          return error.data;
        });
    };
  };
  export const apiSaveAgencies = (agencies) => {
    var body = JSON.parse(JSON.stringify(agencies));
   var options = GenerateOptions("agencies", "post", body);
    return (dispatch) => {
      dispatch(requestDataAgencies());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(dataSavedAgencies(response.data));
          swal({
            text: "Saved Successfully!",
            icon: "success",
          });
        })
        .catch((error) => {
          swal({
            text: "Error",
            icon: "warning",
          });
          return error.data;
          
        });
    };
  };
  export const apiGetAgenciesData = (id) => {
    var options = GenerateOptions(`agencies/${id}`, "get");
    return (dispatch) => {
      dispatch(fetchDataAgencies());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(receiveAgenciesData(response.data));
        })
        .catch((error) => {
          return error.data;
        });
    };
  };
  export const apiUpdateAgencies = (agencies, id) => {
    var body = JSON.parse(JSON.stringify(agencies));
    var options = GenerateOptions(`agencies/${id}`, "patch", body);
    return (dispatch) => {
      dispatch(requestDataAgencies());
  
      return MakeTheApiCall(options)
        .then((response) => {
          console.log(response, "res");
          dispatch(updateAgenciesData(response.data));
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