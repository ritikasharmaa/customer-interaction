const API_URL =   "http://localhost:4000";
const CLIENT_LIST_URL = API_URL + '/clients';
const DEBUG_MODE = process.env.REACT_APP_DEBUG_MODE || false;

export {
    API_URL, 
    CLIENT_LIST_URL,
    DEBUG_MODE
}