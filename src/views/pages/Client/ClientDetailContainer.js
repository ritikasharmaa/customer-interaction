import { connect } from 'react-redux';
import ClientDetail from './ClientDetail';
import { apiGetClientData, apiDeleteData } from '../../../redux/api/ApiClients';
import { apiGetProjects } from '../../../redux/api/ApiProject';
import { toogleClientModal, onChangeForm, editClient} from '../../../redux/actions/client'
import { toggleProjectModal } from '../../../redux/actions/project'

const mapStateToProps = (state) => {
  return {
    client: state.client,
    project: state.project,
    properties: state.properties
  };
};

const mapDispatchtoProps = {
  toogleClientModal,
  onChangeForm,
  editClient,
  apiGetClientData,
  apiDeleteData,
  toggleProjectModal,
  apiGetProjects,
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ClientDetail);