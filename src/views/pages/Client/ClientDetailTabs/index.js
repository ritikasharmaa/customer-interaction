import React, { Component } from "react";
import ProjectTabPane from "./ProjectTabPane";
import ClientInfoTabPane from "./ClientInfoTabPane";
import HistoricTabPane from "./HistoricTabPane";
import { FormattedMessage } from "react-intl";

import OwnTabs from '../../../../components/OwnTabs/OwnTabs'

export class ClientDetailTabs extends Component {

  renderTabs(){
    let tabsData = [
      {
        tabTitle: <FormattedMessage id="client.projects" defaultMessage="Clients" />,
        tabComponent: <ProjectTabPane {...this.props} />,
        disabled: false
      },
      {
        tabTitle: <FormattedMessage id="client.info" defaultMessage="Clients" />,
        tabComponent: <ClientInfoTabPane {...this.props} />,
        disabled: false
      },
      {
        tabTitle: <FormattedMessage id="client.historic" defaultMessage="Clients" />,
        tabComponent: <HistoricTabPane {...this.props} />,
        disabled: false
      }
    ]
    return <OwnTabs className="justify-content-start client-project" tabsData={tabsData} />
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
      </div>
    );
  }
}

export default ClientDetailTabs;
