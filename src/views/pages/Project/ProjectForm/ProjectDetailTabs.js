import React, { Component } from "react";
import OwnTabs from '../../../../components/OwnTabs/OwnTabs'
import PurchaseTab from "./PurchaseTab";
import SaleTab from "./SaleTab";
import WorkTab from "./WorkTab";
import { FormattedMessage } from "react-intl";

export class ProjectDetailTabs extends Component {

  renderTabs(){
    let { ProjectForm } = this.props;
    
    let type = ProjectForm.type

    let tabsData = [
      {
        tabTitle:  <FormattedMessage id="project.buy" />,
        tabComponent: <PurchaseTab {...this.props} />,
        disabled: (type.indexOf('buy') == -1)
      },
      {
        tabTitle: <FormattedMessage id="project.sell" />,
        tabComponent: <SaleTab {...this.props} />,
        disabled: (type.indexOf('sell') == -1)
      },
      {
        tabTitle: <FormattedMessage id="client.credit" />,
        tabComponent: <PurchaseTab {...this.props} />,
        disabled: (type.indexOf('credit') == -1)
      },
      {
        tabTitle: <FormattedMessage id="client.work" />,
        tabComponent: <WorkTab {...this.props} />,
        disabled: (type.indexOf('works') == -1)
      }
    ]
    return <OwnTabs className="client-project" tabsData={tabsData} />
  }

  render() {
    return (
      <div className="projectDetailTabs">
        {this.renderTabs()}
      </div>
    );
  }
}
export default ProjectDetailTabs;
