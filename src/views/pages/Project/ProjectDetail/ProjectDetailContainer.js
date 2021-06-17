import { connect } from 'react-redux';
import ProjectDetail from './index';
import { apiGetProjectData } from '../../../../redux/api/ApiProject';
import {editProject} from '../../../../redux/actions/project'
import { toggleProposalModal, onChangeProposalForm} from '../../../../redux/actions/proposal'
import {apiSaveProposals, apiGetProposals, apiUpdateProposals} from '../../../../redux/api/ApiProposal';
import {apiGetClients} from '../../../../redux/api/ApiClients';
const mapStateToProps = (state) => {
  return {
    project: state.project,
    client: state.client,
    proposal: state.proposal,
    auth: state.auth,
  };
};

const mapDispatchtoProps = {
    apiGetProjectData,
    editProject,
    toggleProposalModal,
    onChangeProposalForm,
    apiSaveProposals,
    apiGetClients,
    apiGetProposals,
    apiUpdateProposals
    
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProjectDetail);