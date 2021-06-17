import { connect } from 'react-redux';
import Login from './Login';
import {ApiLoginWithGoogle} from '../../../../redux/api/ApiLogin';

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchtoProps = {
  ApiLoginWithGoogle
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Login);