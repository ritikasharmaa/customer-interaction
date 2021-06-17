import React from "react";
import axios from "axios";
import { API_URL } from "../../main";
import { logout } from "../actions/auth";

import { store } from "../storeConfig/store";

const { dispatch } = store;

const CancelToken = axios.CancelToken;
let cancel;

/**
 * This function would universally handle API errors
 *
 * @param apiOptions
 * @param multiple Parameter for axios.all request (apiOptions should be array of axios requests)
 * @param dispatch
 * @returns {axios.Promise}
 * @constructor
 */

export default function MakeTheApiCall(apiOptions, multiple = false) {
  var success = (resolve, reject, response) => {
      let checkResponse = (response) => {
        if (response.status !== 200 && response.status !== 201) {
          return reject(response);
        }
      };
      if (Array.isArray(response)) {
        response.forEach((r) => {
          checkResponse(r);
        });
      } else {
        checkResponse(response);
      }
      return resolve(response);
    },
    error = (resolve, reject, err) => {
      if (err.response.status === 406) {
        return reject(err);
      }
      if (err.response.status === 403) {
        window.location.replace("forbidden");
      } else {
        // showErrorToster(err.statusText, apiOptions.method, apiOptions.url)
      }
      if (err.response && err.response.status === 401) {
        dispatch(logout());
      }
      return reject(err);
    };
  if (multiple) {
    return new Promise((resolve, reject) => {
      return axios
        .all(apiOptions)
        .then((response) => {
          success(resolve, reject, response);
        })
        .catch((err) => {
          error(resolve, reject, err);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      return axios(apiOptions)
        .then((response) => {
          success(resolve, reject, response);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request canceled.", err.message);
          } else {
            error(resolve, reject, err);
          }
        });
    });
  }
}

/**
 * Build the correct headers and options to make the API call.
 * @params url: string
 * @params method: string
 * @params data: object
 * @returns {{method: string, url: string, crossDomain: boolean, headers: {Authorization: string, Content-Type: string}, json: boolean}}
 */

export function GenerateOptions(url, method, body) {
  var token = localStorage.getItem("token");

  var options = {
    method: method,
    url: `${API_URL}/${url}`,
    headers: {
      "cost-auth-token": token,
    },
    json: true,
    data: "",
  };

  if (body) {
    options["data"] = body;
  }

  return options;
}

export function cancelRequest() {
  cancel("Operation canceled by the user.");
}
