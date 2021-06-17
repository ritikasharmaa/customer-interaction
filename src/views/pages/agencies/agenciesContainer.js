import { connect } from 'react-redux';
import Agencies from './index';
import {apiGetAgencies, apiSaveAgencies} from "../../../redux/api/ApiAgencies"
import {toggleAgenciesModal, onChangeFormAgencies, editAgencies} from "../../../redux/actions/agencies"
import {apiGetUsers} from "../../../redux/api/ApiUsers"
const mapStateToProps = (state) => {
  return {
    agencies: state.agencies,
    user: state.user
  };
};

const mapDispatchtoProps = {
  apiGetAgencies,
  toggleAgenciesModal,
  apiGetUsers,
  onChangeFormAgencies,
  apiSaveAgencies,
  editAgencies
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Agencies);