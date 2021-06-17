import React from "react";
import AggridTable from "../../../components/tables/aggrid/Aggrid";
import { clientColumnDefs } from "../../../redux/Constants";
import { FormattedMessage, injectIntl } from "react-intl";
import OwnBreadcrumb from "../../../components/OwnBreadcrumb/OwnBreadcrumb";
import * as Icon from "react-feather";
import { Button } from "reactstrap";
import Filters from "../../../components/Client/Filters";
import Customizer from "../../../components/@vuexy/customizer/Customizer";
import ClientFilter from "../../../components/Client/CustomizerFilter";

class Clients extends React.Component {
  state = {
    filter: {
      searchText: "",
    },
    modal: false,
  };

  onChange(key, event) {
    let { filter } = this.state;
    filter[key] = event.target.value;
    this.setState({ filter });
  }

  componentDidMount() {
    this.props.apiGetClients();
  }

  onRowClicked(event) {
    this.props.history.push(`/clients/${event.data._id}`);
  }

  getLinks() {
    return [
      {
        link: "/clients",
        render: <Icon.User />,
      },
    ];
  }

  customFilters() {
    return (
      <Filters onChange={this.onChange.bind(this)} filter={this.state.filter} />
    );
  }

  getData() {
    let { client } = this.props;
    let { filter } = this.state;
    if (!client.clientList.length) {
      return [];
    }

    let filterData;

    if (filter.searchText) {
      filterData = client.clientList.filter((obj) =>
        obj.surname?.toUpperCase().startsWith(filter.searchText.toUpperCase())
      );
    } else {
      filterData = client.clientList;
    }
    filterData = filterData.map((item) => {
      return {
        ...item,
        origin: this.props.intl.formatMessage({ id: "client." + item.origin }),
      };
    });
    return filterData;
  }
  clients() {
    let { client } = this.props;
    if (client.clientList.length == 0 || client.clientList.length == 1) {
      return <div>{client.clientList && client.clientList.length} Client</div>;
    } else {
      return <div>{client.clientList && client.clientList.length} Clients</div>;
    }
  }
  render() {
    let { client } = this.props;

    let columnDef = clientColumnDefs.map((item) => {
      return {
        ...item,
        headerName: this.props.intl.formatMessage({ id: item.headerName }),
      };
    });
    return (
      <div>
        <div className="detailTopSec">
          <h1 className="client">
            <FormattedMessage id="client.client" defaultMessage="Clients" />
          </h1>
          <OwnBreadcrumb links={this.getLinks()} />
          <div className="rightBtnsCon">
            <Button
              className="filterButton"
              onClick={() => this.setState({ modal: true })}
            >
              <Icon.AlignCenter />
              Filter (2)
            </Button>
          </div>
        </div>
        <div className="subDetailCon">
          <ul>
            <li>{this.clients()}</li>
          </ul>
        </div>

        <AggridTable
          data={this.getData()}
          columnDefs={columnDef}
          onRowClicked={this.onRowClicked.bind(this)}
          customFilters={this.customFilters()}
        />

        <Customizer
          customizerState={this.state.modal}
          handleCustomizer={() => this.setState({ modal: false })}
          child={<ClientFilter />}
          heading="Filters - Client"
          subheading="1345 clients found"
        />
      </div>
    );
  }
}

export default injectIntl(Clients);
