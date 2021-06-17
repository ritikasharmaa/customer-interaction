import React, { Component } from "react";
import { connect } from "react-redux";
import OwnBreadcrumb from "../../../../components/OwnBreadcrumb/OwnBreadcrumb";
import { FormattedMessage } from "react-intl";
import * as Icon from "react-feather";
import { Button, Card , Row, Col} from "reactstrap";
import OwnTabs from "../../../../components/OwnTabs/OwnTabs";
import RightSection from "../../../../components/Client/RightSection";
import ResearchCriteria from "./Research";
import Proposition from "./Propositions";
import Offers from "./Offers";

export class ProjectDetail extends Component {
  componentDidMount() {
    const projectId = this.props.match.params._id;
    this.props.apiGetProjectData(projectId);
  }
  editProject() {
    let projectData = JSON.parse(
      JSON.stringify(this.props.project.detailProject)
    );
    this.props.editProject(projectData);
  }

  getLinks() {
    let { project, client } = this.props;
    if (project.detailProject.clients?.length > 0) {
      return [
        {
          link: `/clients/${project.detailProject?.clients?.map(
            (item) => item._id
          )}`,
          render: <Icon.User size={18} />,
        },
        {
          link: `/clients/${project.detailProject?.clients?.map(
            (item) => item._id
          )}`,
          render:
            project.detailProject.clients[0].name +
            " " +
            project.detailProject.clients[0].surname,
        },
        {
          render: <FormattedMessage
                    id="project.buyProject"
                    defaultMessage="Clients"
                  />
        },
      ];
    }
  }

  renderTabs() {
    let tabsData = [
      {
        tabTitle: (
          <FormattedMessage id="project.details" defaultMessage="Clients" />
        ),
        tabComponent: <ResearchCriteria {...this.props} />,
        disabled: false,
        className: "sellBuy colSellBuy iconText",
      },
      {
        tabTitle: (
          <FormattedMessage id="project.proposal" defaultMessage="Clients" />
        ),
        tabComponent: <Proposition {...this.props} />,
        disabled: false,
        badge: this.badge(),
        className: "sellBuy colSellBuy iconText",
      },
      // {
      //   tabTitle:<FormattedMessage id="client.offers" defaultMessage="Clients" />,
      //   tabComponent: <Offers />,
      //   disabled: false,
      //   badge: 1,
      //   className: "sellBuy colSellBuy",
      // },
    ];
    return (
      <OwnTabs
        className="justify-content-start client-project"
        tabsData={tabsData}
      />
    );
  }
  badge() {
    if (this.props.proposal.proposalList.length == 0) {
      return "0";
    } if(this.props.proposal.proposalList.filter(i => i.status !== 'rejected').length === 0){
      return "0";
    } 
     else {
      return this.props.proposal.proposalList.filter(i => i.status !== 'rejected').length;
    }
  }
  render() {
    let { project, client, proposal } = this.props;
    var date = new Date(project.detailProject.created).toLocaleDateString('fr-FR');
    return (
      <>
        <div className="projectPurchase common">
          <div className="detailTopSec">
            <Row>
              <Col sm="4">
                <h1 className="client">
                  <FormattedMessage
                    id="project.buyProject"
                    defaultMessage="Clients"
                  />
                </h1>
                </Col>
                <Col sm="4" className="breadCrumbs">
                <OwnBreadcrumb links={this.getLinks()} />
                </Col>
                <Col sm="4">
                <RightSection onEdit={this.editProject.bind(this)} />
              </Col>
            </Row>
          </div>
          {project.detailProject.clients?.length > 0 && (
            <span className="subheading">
              <FormattedMessage
                id="project.sell.createdBy"
                defaultMessage="Clients"
              />{" "}
              {project.detailProject.clients[0].name} on {date}
            </span>
          )}
          <div id="projectPage" className="projectCon">
            <div className="nav-vertical ">{this.renderTabs()}</div>
          </div>
        </div>
      </>
    );
  }
}

export default ProjectDetail;
