import { connect } from 'react-redux';
import buy from './index';
import {apiGetProject} from "../../../../redux/api/ApiProject"

const mapStateToProps = (state) => {
  return {
  	project: state.project
  };
};

const mapDispatchtoProps = {
  apiGetProject
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(buy);