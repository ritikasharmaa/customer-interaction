import * as loginAction from "./loginActions"
import * as types from '../actionTypes'
import { history } from "../../../history"

export default loginAction

export function loginSuccessWithGoogle(json) {
    return {
        type: types.LOGIN_WITH_GOOGLE,
        data: json
    }
}
export function receiveError(json) {
    return {
        type: types.LOGIN_ERROR,
        data: json
    }
}
export function requestData(json) {
    return {
        type: types.LOGIN_REQUEST
    }
}
export function loadUser() {
	let userData = JSON.parse(localStorage.getItem('auth_info'))
    return {
        type: types.LOGIN_WITH_GOOGLE,
        data: userData
    }
}

export function logout() {
	localStorage.removeItem('auth_info')
	localStorage.removeItem('token')
	history.push('/')
    return {
        type: types.LOGIN_WITH_GOOGLE,
        data: {}
    }
}



