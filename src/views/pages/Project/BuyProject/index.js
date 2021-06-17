import React, { Component } from 'react';
import {buyColumns, sellColumns} from "../../../../redux/Constants";
import { FormattedMessage, injectIntl } from "react-intl";
import OwnBreadcrumb from "../../../../components/OwnBreadcrumb/OwnBreadcrumb";
import * as Icon from "react-feather";
import ReactTable from "react-table"
import "react-table/react-table.css"
import "../../../../assets/scss/plugins/extensions/react-tables.scss"
import {
  Card,
  CardBody,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export class buy extends Component {
    componentDidMount() {
        this.props.apiGetProject();
      }
    getLinks() {
        return [
          {
            link: "/buy",
            render: <Icon.User />,
          },
        ];
      }
      getData() {
        let { project } = this.props;
        if (!project.projectList.length) {
          return [];
        }
        let filterData;
        filterData = project.projectList;
        return filterData;
      }
    render() {
        return (
            <div>
          <Card>
          <CardBody>
            <div className="detailTopSec">
              <h1 className="client">
                <FormattedMessage id="project.buy" defaultMessage="Clients" />
              </h1>
              <OwnBreadcrumb links={this.getLinks()} />
              <div className="rightBtnsCon">
                {/* <UncontrolledButtonDropdown className="buttonBtn">
                  <DropdownToggle color="white" caret>
                  <FormattedMessage id="user.filterByAgency" defaultMessage="Clients" />
                    <Icon.ChevronDown size={15} />
                  </DropdownToggle>
                  <DropdownMenu tag="div" right>
                    <DropdownItem tag="a">
                      <div> </div>
                    </DropdownItem>
                    <DropdownItem tag="a">
                      <div></div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown> */}
              </div>
            </div>
            <div className="subDetailCon">
              <ul>
                <li></li>
              </ul>
            </div>

            <ReactTable
              data={this.getData()}
            className="userAgency"
              columns={buyColumns}
              defaultPageSize={10}
              noHeader pagination
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
            </div>
            
        )
    }
}

export default buy
