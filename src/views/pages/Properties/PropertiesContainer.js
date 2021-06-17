import { connect } from 'react-redux';
import Properties from './index';
import {togglePropertiesForm} from '../../../redux/actions/properties'
import {apiGetProperties} from '../../../redux/api/ApiProperties'
const mapStateToProps = (state) => {
  return {
    properties: state.properties,
  };
};

const mapDispatchtoProps = {
  togglePropertiesForm,
  apiGetProperties
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Properties);