import {
loginSuccessWithGoogle,
receiveError,
requestData
} from "../actions/auth/index";

import {API_URL} from '../../main';
import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";

import { history } from "../../history"

import { store } from "../storeConfig/store";

const { dispatch } = store;
/**
 * This function call the api and validate the users trying to login
 * If user/pass is valid, the store will be updated to login the user.
 *
 * @param object dispatch
 * @param object auth
 * @constructor
 */

export function ApiLoginWithGoogle (token) {
    var options = GenerateOptions(`auth/google?access_token=${token}`, "post");
    return (dispatch) => {
        dispatch(requestData());

        return MakeTheApiCall(options)
          .then((response) => {
            console.log(response, 'response')
            setToken(response.headers['cost-auth-token']);
            setAuth(response.data)
            dispatch(loginSuccessWithGoogle(response.data));
            history.push('/dashboard')
          })
          .catch((error) => {
            return error.data;
          });
      };
}

function setToken(token) {
    // Save Access Token for Future Calls
    localStorage.setItem('token',token);
}

function setAuth(auth_info) {
    // Save Access Token for Future Calls
    localStorage.setItem('auth_info',JSON.stringify(auth_info));
}
