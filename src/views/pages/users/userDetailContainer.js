import { connect } from 'react-redux';
import userDetail from './userDetail';
import {apiGetUsersData, apiGetUsers} from "../../../redux/api/ApiUsers"
import {apiGetAgenciesData, apiSaveAgencies} from "../../../redux/api/ApiAgencies";
import {toggleUserModal, onChangeFormUser}from "../../../redux/actions/users"
import {toggleAgenciesModal, onChangeFormAgencies, editAgencies} from "../../../redux/actions/agencies";
const mapStateToProps = (state) => {
  return {
    user: state.user,
    agencies: state.user
  };
};

const mapDispatchtoProps = {
  apiGetUsersData,
  apiGetUsers,
  apiGetAgenciesData,
  toggleAgenciesModal,
  onChangeFormAgencies,
  apiSaveAgencies,
    toggleUserModal,
  onChangeFormUser
  
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(userDetail);