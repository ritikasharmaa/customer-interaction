import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
 import {
    requestData,
    dataSaved,
    getProperties
 } from "../actions/properties"


 export const apiSaveProperties = (properties) => {
    var body = JSON.parse(JSON.stringify(properties));
    var options = GenerateOptions("properties", "post", body);
    return (dispatch) => {
      dispatch(requestData());
      return MakeTheApiCall(options)
        .then((response) => {
          console.log(response, "res prop");
          dispatch(dataSaved(response.data));
          return response.data;
        })
        .catch((error) => {
          console.log(error, "err prop");
          return error.response;
        });
    };
  };

  export const apiGetProperties = () => {
    var options = GenerateOptions("properties");
    return (dispatch) => {
      dispatch(requestData());
  
      return MakeTheApiCall(options)
        .then((response) => {
          dispatch(getProperties(response.data));
        })
        .catch((error) => {
          return error.data;
        });
    };
  };