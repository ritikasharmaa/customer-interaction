import * as main from "../../main";
import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import {
  receiveListOfClient,
  prepClientTableForData,
  requestData,
  fetchData,
  dataSaved,
  receiveClientData,
  updateClientData,
  deleteClientData
} from "../actions/client";
import swal from "sweetalert";

import { store } from "../storeConfig/store";

const { dispatch } = store;

/** api methods*/
export const apiGetClients = () => {
  var options = GenerateOptions("clients");
  return (dispatch) => {
    dispatch(prepClientTableForData());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(receiveListOfClient(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};

export const apiSaveClients = (client) => {
  var body = JSON.parse(JSON.stringify(client));

  delete body.address;
  delete body.city;
  delete body.postcode;
  delete body.country;

  body.address = {
    address: client.address,
    city: client.city,
    postcode: client.postcode,
    country: client.country,
  };

  var options = GenerateOptions("clients", "post", body);
  return (dispatch) => {
    dispatch(requestData());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(dataSaved(response.data));
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

export const apiUpdateClients = (client, id) => {
  var body = JSON.parse(JSON.stringify(client));

  delete body.address;
  delete body.city;
  delete body.postcode;
  delete body.country;

  body.address = {
    address: client.address,
    city: client.city,
    postcode: client.postcode,
    country: client.country,
  };

  var options = GenerateOptions(`clients/${id}`, "patch", body);
  return (dispatch) => {
    dispatch(requestData());
    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(updateClientData(body));
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

export const apiGetClientData = (id) => {
  var options = GenerateOptions(`clients/${id}`, "get");
  return (dispatch) => {
    dispatch(fetchData());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(receiveClientData(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};

export const apiDeleteData = (id) => {
  var options = GenerateOptions(`clients/${id}`, "delete");
  return (dispatch) => {
    dispatch(requestData());

    return MakeTheApiCall(options)
      .then((response) => {
        dispatch(deleteClientData(response.data));
      })
      .catch((error) => {
        return error.data;
      });
  };
};
