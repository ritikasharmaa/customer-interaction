import { connect } from 'react-redux';
import agenciesDetail from './agenciesDetail';
import {apiGetAgenciesData, apiUpdateAgencies} from "../../../redux/api/ApiAgencies";
import {apiGetUsers} from "../../../redux/api/ApiUsers";
import {toggleAgenciesModal, onChangeFormAgencies, editAgencies} from "../../../redux/actions/agencies";
const mapStateToProps = (state) => {
  return {
    agencies: state.agencies,
    user:state.user
  
  };
};

const mapDispatchtoProps = {
  apiGetAgenciesData,
  toggleAgenciesModal,
  editAgencies,
  onChangeFormAgencies,
  apiGetUsers,
  apiUpdateAgencies
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(agenciesDetail);