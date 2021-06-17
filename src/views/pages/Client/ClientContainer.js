import { connect } from 'react-redux';
import Client from './index';
import {apiGetClients, apiSaveClients, apiUpdateClients} from '../../../redux/api/ApiClients';
import {toogleClientModal, onChangeForm, editClient} from '../../../redux/actions/client'

const mapStateToProps = (state) => {
  return {
    client: state.client
  };
};

const mapDispatchtoProps = {
    apiGetClients,
    toogleClientModal,
    onChangeForm,
    editClient
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Client);