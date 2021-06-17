import { connect } from 'react-redux';
import Home from './index';

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchtoProps = {
    
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Home);