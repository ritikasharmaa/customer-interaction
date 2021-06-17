import React from "react";
import AggridTable from "../../../components/tables/aggrid/Aggrid";
import Filters from "../../../components/Client/Filters";
import Customizer from "../../../components/@vuexy/customizer/Customizer";
import OwnBreadcrumb from "../../../components/OwnBreadcrumb/OwnBreadcrumb";
import * as Icon from "react-feather";
import { Button } from "reactstrap";
import { PropertiesColumnDefs} from "../../../redux/Constants"
import { FormattedMessage, injectIntl } from "react-intl";

class Properties extends React.Component {
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
    this.props.apiGetProperties();
  }
  getLinks() {
    return [
      {
        link: "/properties",
        render: <Icon.Home />,
      },
    ];
  }
  getData() {
    let { properties } = this.props;
    let { filter } = this.state;
    if (!properties?.propertiesList.length) {
      return [];
    
    } else {
      return properties?.propertiesList;
    }
  }
  customFilters() {
    return (
      <Filters onChange={this.onChange.bind(this)} filter={this.state.filter} />
    );
  }

  render() {
    let columnDef = PropertiesColumnDefs.map(item=> { return {...item, headerName: this.props.intl.formatMessage({ id: item.headerName }) } })

    return (
      <div>
        <div className="detailTopSec">
          <h1 className="">
            Biens
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
            <li> Biens</li>
            <li>Seller</li>
            <li>Buyers</li>
          </ul>
        </div>

        <AggridTable
          columnDefs={columnDef}
          data={this.getData()}
          // onRowClicked={this.onRowClicked.bind(this)}
          customFilters={this.customFilters()}
        />

        <Customizer
          customizerState={this.state.modal}
          handleCustomizer={() => this.setState({ modal: false })}
          heading="Filters - Client"
          subheading="1345 clients found"
        />
      </div>
    );
  }
}

export default injectIntl(Properties);
