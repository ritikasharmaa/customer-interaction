import React, { Component } from "react";
import * as Icon from "react-feather";
import { connect } from "react-redux";
import OwnModal from "../../../../components/OwnModal/OwnModal";
import ProjectForm from "../../Project/ProjectForm/ProjectForm";
import {
  apiSaveProjects,
  apiUpdateProjects,
} from "../../../../redux/api/ApiProject";
import { onChangeFormData } from "../../../../redux/actions/project";
import OwnTabs from "../../../../components/OwnTabs/OwnTabs";
import { ProjectBuyTab } from "./ProjectBuyTab";
import { ProjectSellTab } from "./ProjectSellTab";
import { FormattedMessage , injectIntl } from "react-intl";

export class ProjectTabPane extends Component {
  renderTabs() {
    let tabsData = [
      {
        tabTitle:  <FormattedMessage id="project.buy" defaultMessage="Clients" />,
        tabComponent: <ProjectBuyTab {...this.props}   wrap={true} />,
        className: "sellBuy colSellBuy iconText",
        icon: "custIcon buy",
        badge: this.badge(),
      },
      {
        tabTitle: <FormattedMessage id="project.sell" defaultMessage="Clients" />,
        tabComponent: <ProjectSellTab {...this.props}   wrap={true} />,
        className: "sellBuy colSellBuy iconText",
        icon: "custIcon sell",
        badge: this.badges(),
        button: "Create Project",
        buttonClass: "createProjectBtn",
        onClick: this.props.toggleProjectModal.bind(this),
        buttonIcon: <Icon.Share2 size="15" />,
      },
    ];
    return <OwnTabs className="client-project" tabsData={tabsData} />;
  }

  badge() {
    if (this.props.project.projectList.length == 0) {
      return "0";
    } else  if (this.props.project.projectList.filter(
      (item) => item.type === "buy"
    ).length == 0) {
      return "0"
    }
     else {
      return this.props.project.projectList.filter(
        (item) => item.type === "buy"
      ).length;
    }
  }
  badges() {
    if (this.props.project.projectList.length == 0) {
      return "0";
    }
    else  if (this.props.project.projectList.filter(
      (item) => item.type === "sell"
    ).length == 0) {
      return "0"
    } else {
      return this.props.project.projectList.filter(
        (item) => item.type === "sell"
      ).length;
    }
  }

  render() {
    let { client, project } = this.props;
    return (
      <div className="projectCon">
        <div className="nav-vertical">{this.renderTabs()}</div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     project: state.project,
//     client: state.client,
//   };
// };

// const mapDispatchtoProps = {
//   apiSaveProjects,
//   onChangeFormData,
//   apiUpdateProjects,
// };

export default injectIntl(ProjectTabPane);
