import React, { Component } from "react";
import ReactTable from "react-table";
import DataTable from "react-data-table-component"

import "react-table/react-table.css";
import "../../../assets/scss/plugins/extensions/react-tables.scss";
import {
  Card,
  CardBody,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FormattedMessage, injectIntl } from "react-intl";
import OwnBreadcrumb from "../../../components/OwnBreadcrumb/OwnBreadcrumb";
import * as Icon from "react-feather";
import { columns } from "../../../redux/Constants";

const SortIcon = () => { return <Icon.ArrowDown />; };
export class users extends Component {
  componentDidMount() {
    this.props.apiGetUsers();
    this.props.apiGetAgencies();

  }
  onRowClicked(event) {
    this.props.history.push(`/users/${event._id}`);
  }
  getLinks() {
    return [
      {
        link: "/users",
        render: <Icon.Users />,
      },
    ];
  }
  data() {
    let { user } = this.props;
    if (!user.userList.length) {
      return [];
    } else {
      return user.userList;
    }
  }
  users() {
    let { user } = this.props;
    if (user.userList.length == 0 || user.userList.length == 1) {
      return <div>{user.userList && user.userList.length} <FormattedMessage id="user.user" defaultMessage="Clients" /></div>;
    } else {
      return <div>{user.userList && user.userList.length} <FormattedMessage id="user.users" defaultMessage="Clients" /></div>;
    }
  }
  render() {
    console.log(this.props, "users")
    const {agencies}= this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <div className="detailTopSec">
              <h1 className="client">
                <FormattedMessage id="user.users" defaultMessage="Clients" />
              </h1>
              <OwnBreadcrumb links={this.getLinks()} />
              <div className="rightBtnsCon">
                <UncontrolledButtonDropdown className="buttonBtn">
                  <DropdownToggle color="white" caret>
                  <FormattedMessage id="user.filterByAgency" defaultMessage="Clients" />
                    <Icon.ChevronDown size={15} />
                  </DropdownToggle>
                  <DropdownMenu tag="div" right>
                  {agencies.agenciesList.map( (item, index) => {
                  return  <DropdownItem tag="a" key={index}>
                    <div>{item.name} </div>
                  </DropdownItem>
                  })}  
                    <DropdownItem tag="a">
                    <FormattedMessage id="user.all" defaultMessage="Clients" />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            </div>
            <div className="subDetailCon">
              <ul>
                <li>{this.users()}</li>
              </ul>
            </div>

            <DataTable
            className="userAgency"
              data={this.data()}
              columns={columns}
              defaultPageSize={10}
              noHeader pagination
              sortIcon={<SortIcon />}
              onRowClicked={this.onRowClicked.bind(this)}
              defaultSortAsc={false}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default users;
