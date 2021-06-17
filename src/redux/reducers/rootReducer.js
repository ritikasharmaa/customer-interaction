import { combineReducers } from "redux"
import customizer from "./customizer/"
import auth from "./auth/"
import navbar from "./navbar/Index"
import client from './client/clientReducer'
import project from './project/projectReducer'
import properties from './properties/propertiesReducer'
import proposal from "./proposal/proposalReducer"
import photo from "./photo/photoReducer"
import user from "./users/userReducer"
import agencies from "./agencies/agenciesReducer"
const rootReducer = combineReducers({
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  client: client,
  project: project,
  properties: properties,
  proposal : proposal,
  photo: photo,
  user: user,
  agencies:agencies
})

export default rootReducer
