import React from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import * as Icon from "react-feather";
import { connect } from "react-redux";
import { toogleClientModal, onChangeForm } from "../../../redux/actions/client";
import {
  onChangeFormData,
  toggleProjectModal,
} from "../../../redux/actions/project";
import {
  onChangeProposalForm,
  toggleProposalModal,
} from "../../../redux/actions/proposal";
import { FormattedMessage } from "react-intl";
import OwnModal from "../../../components/OwnModal/OwnModal";
import ClientForm from "../../../views/pages/Client/ClientForm";
import ProjectForm from "../../../views/pages/Project/ProjectForm/ProjectForm";
import {
  apiSaveClients,
  apiUpdateClients,
  apiGetClients,
} from "../../../redux/api/ApiClients";
import {
  apiSaveProjects,
  apiUpdateProjects,
  apiGetProjectData,
  apiGetProjects,
  apiGetProject,
} from "../../../redux/api/ApiProject";
import { apiSaveProperties } from "../../../redux/api/ApiProperties";
import { ProposalForm } from "../../../views/pages/Proposal/ProposalForm";
import {apiSaveProposals, apiGetProposals} from "../../../redux/api/ApiProposal"
class PlusIcon extends React.PureComponent {
  toggleModal() {
    this.props.toogleClientModal();
  }
  toggleProjectModal() {
    this.props.toggleProjectModal();
  }
  toggleProposalModal() {
    this.props.toggleProposalModal();
  }
  onSaveClient(event) {
    event.preventDefault();
    const userId = this.props.client.clientForm._id;
    const creatorId = this.props.auth.login.user._id;

    if (this.props.client.isEditing) {
      this.props.apiUpdateClients(this.props.client.clientForm, userId);
    } else {
      let objToSend = { creator: creatorId, ...this.props.client.clientForm };
      this.props.apiSaveClients(objToSend);
    }
  }

  onSaveProject() {
    const clientId = this.props.client.detail._id;
    const projectId = this.props.project.detailProject._id;
    let objSend = {
      clients: [clientId],
      ...this.props.project.projectForm,
    };
    if (this.props.project.isEditing) {
      this.props.apiUpdateProjects(objSend, projectId).then((res) => {
        this.props.apiGetProjects(projectId);
      });
    } else {
      let objSend = {
        clients: [clientId],
        ...this.props.project.projectForm,
      };
      objSend.type.forEach((type) => {
        let data = { ...objSend };
        data.type = type;
        if (type === "sell") {
          if (this.props.properties.isShow) {
            this.props
              .apiSaveProperties(this.props.properties.propertiesForm)
              .then((res) => {
                data.property = res._id;
                this.props.apiSaveProjects(data);
              });
          } else {
            this.props.apiSaveProjects(data);
          }
        } else {
          this.props.apiSaveProjects(data);
        }
      });
    }
  }
  onSaveProposal() {
    const creatorId = this.props.auth.login.user._id;
    const projectId = this.props.project.detailProject._id;
    let objToSend = { creator: creatorId, ...this.props.proposal.proposalForm };
    this.props.apiSaveProposals(objToSend).then((res) => {
      this.props.apiGetProposals(projectId );
    })
  }
  render() {
    let { client, project, properties, proposal } = this.props;
    console.log(this.props, "props");
    return (
      <ul className="nav ml-auto float-right">
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <span data-tour="user">
              <Icon.Plus />
            </span>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="a" onClick={this.toggleModal.bind(this)}>
              <Icon.User size={14} className="mr-50" />
              <span className="align-middle"><FormattedMessage id="client.client" defaultMessage="Client" /></span>
            </DropdownItem>
            <DropdownItem tag="a" onClick={this.toggleProjectModal.bind(this)}>
              <Icon.Share2 size={14} className="mr-50" />
              <span className="align-middle">Project</span>
            </DropdownItem>
            <DropdownItem tag="a" onClick={this.toggleProposalModal.bind(this)}>
              <Icon.Share2 size={14} className="mr-50" />
              <span className="align-middle">Proposal</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/*client modal*/}
        <OwnModal
          isOpen={client.isModalOpen}
          toggleModal={this.toggleModal.bind(this)}
          onSave={this.onSaveClient.bind(this)}
          isSaving={client.isSaving}
          heading={
            <FormattedMessage id="client.client" defaultMessage="Client" />
          }
        >
          <ClientForm
            onChange={this.props.onChangeForm}
            clientForm={client.clientForm}
            client={client}
            userName={
              this.props.auth.login.user && this.props.auth.login.user.full_name
            }
          />
        </OwnModal>

        {/*projectCon modal*/}
        <OwnModal
          isOpen={project.isModalOpen}
          toggleModal={this.toggleProjectModal.bind(this)}
          isSaving={project.isSaving}
          onSave={this.onSaveProject.bind(this)}
          heading= {<FormattedMessage id="project.creation" defaultMessage="Client" />}
        >
          <ProjectForm
            onChange={this.props.onChangeFormData}
            project={project}
            client={client}
            ProjectForm={project.projectForm}
          />
        </OwnModal>

        {/* Proposal Modal */}
        <OwnModal
          isOpen={proposal.isModalOpen}
          toggleModal={this.toggleProposalModal.bind(this)}
          onSave={this.onSaveProposal.bind(this)}
          isSaving={proposal.isSaving}
          heading={
            <FormattedMessage id="proposal.proposal" defaultMessage="Client" />
          }
        >
          <ProposalForm
            userName={
              this.props.auth.login.user && this.props.auth.login.user.full_name
            }
            onChange={this.props.onChangeProposalForm}
            proposalForm={proposal.proposalForm}
            proposal={proposal}
            client={client}
            apiGetClients={this.props.apiGetClients}
            apiGetProject={this.props.apiGetProject}
            project={project}
          />
        </OwnModal>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    client: state.client,
    project: state.project,
    auth: state.auth,
    properties: state.properties,
    proposal: state.proposal,
  };
};

const mapDispatchtoProps = {
  toogleClientModal,
  onChangeForm,
  apiSaveClients,
  apiUpdateClients,
  apiSaveProjects,
  onChangeFormData,
  apiUpdateProjects,
  toggleProjectModal,
  apiSaveProperties,
  apiGetProjectData,
  apiGetProjects,
  onChangeProposalForm,
  toggleProposalModal,
  apiGetClients,
  apiGetProject,
  apiSaveProposals,
  apiGetProposals
};

export default connect(mapStateToProps, mapDispatchtoProps)(PlusIcon);
