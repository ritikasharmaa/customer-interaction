import { connect } from 'react-redux';
import users from './index';
import {apiGetUsers} from "../../../redux/api/ApiUsers"
import {apiGetAgencies} from "../../../redux/api/ApiAgencies"
const mapStateToProps = (state) => {
  return {
    user: state.user,
    agencies: state.agencies
  };
};

const mapDispatchtoProps = {
  apiGetUsers,
  apiGetAgencies
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(users);