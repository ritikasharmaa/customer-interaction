import { connect } from 'react-redux';
import agenda from './index';


const mapStateToProps = (state) => {
  return {
    agenda: state.agenda
  };
};

const mapDispatchtoProps = {

};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(agenda);