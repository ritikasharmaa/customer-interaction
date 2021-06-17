import { connect } from 'react-redux';
import ProjectSellDetail from './index';
import { apiGetProjectData } from '../../../../redux/api/ApiProject';
import {editProject, toggleProjectModal, } from '../../../../redux/actions/project'
import { toggleProposalModal, onChangeProposalForm} from '../../../../redux/actions/proposal'
import {apiSaveProposals, apiGetProposals, apiUpdateProposals} from '../../../../redux/api/ApiProposal';
import {apiGetClients} from '../../../../redux/api/ApiClients';
import {togglePhotoModal, onChangePhoto, editPhoto} from '../../../../redux/actions/photo'
import {apiSavePhoto, apiGetPhoto, apiDeleteData, apiUpdatePhotos} from '../../../../redux/api/ApiPhoto'

const mapStateToProps = (state) => {
  return {
      auth:state.auth,
      client:state.client,
      project:state.project,
      properties:state.properties,
      photo:state.photo,
      proposal:state.proposal
  };
};

const mapDispatchtoProps = {
    apiGetProjectData,
    editProject,
    toggleProposalModal,
    onChangeProposalForm,
    apiSaveProposals,
    apiGetClients,
    toggleProjectModal,
    togglePhotoModal,
    onChangePhoto,
    apiSavePhoto,
    apiGetPhoto,
    editPhoto,
    apiGetProposals,
    apiDeleteData,
    apiUpdatePhotos,
    apiUpdateProposals
    
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProjectSellDetail);

