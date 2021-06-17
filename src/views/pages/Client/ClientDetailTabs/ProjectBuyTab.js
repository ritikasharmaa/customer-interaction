import React, { Component } from "react";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Table,
  Badge,
} from "reactstrap";
import * as Icon from "react-feather";
import NoData from "../../../../components/Common/nodata";
import DataTable from "react-data-table-component";
import "../../../../assets/scss/pages/data-list.scss";
import { FormattedMessage , injectIntl} from "react-intl";



export class ProjectBuyTab extends Component {
  columns = [ {
        name: <FormattedMessage id="project.creation" /> ,
        sortable: true,
        minWidth: "150px",
        cell: (row) => {
          var date = new Date(row.created).toLocaleDateString('fr-FR');
          return (
            <p title={row.created} className="text-truncate text-bold-500 mb-0 buyProject">
              {date}
            </p>
    
          );
        },
      },
      {
        name: <FormattedMessage id="project.type" />,
        sortable: true,
        minWidth: "200px",
        cell: (row) => {
          let data = row.search?.property?.type.map(item=> this.props.intl.formatMessage({ id: ('project.' +item) }));
          return (
            <p
              title= {data.join(',')}
              className="text-truncate text-bold-500 mb-0 buyProject"
            >
              {data.join(',')}
            </p>
          );
        },
      },
      {
        name:<FormattedMessage id="project.search.property.size" />,
        sortable: true,
        minWidth: "100px",
        cell: (row) => {
          return (
            <p
              title={row.search?.property?.size}
              className="text-truncate text-bold-500 mb-0 buyProject"
            >
              {row.search?.property?.size} M<sup>2</sup>
            </p>
          );
        },
      },
      {
        name:<FormattedMessage id="project.search.property.rooms" />,
        sortable: true,
        minWidth: "150px",
        cell: (row) => {
          return <p
            title={row.search?.property?.rooms}
            className="text-truncate text-bold-500 mb-0 buyProject"
            >
              {row.search.property.rooms} <FormattedMessage id="project.buy.property.rooms.andMore" />
            </p>;
        },
      },
      {
        name:<FormattedMessage id="project.search.finance.budget"/>,
        sortable: true,
        minWidth: "100px",
        cell: (row) => {
          return (
            <p
              title={row.search?.finance?.budget}
              className="text-truncate text-bold-500 mb-0 buyProject"
            >
              {row.search?.finance?.budget}€
            </p>
          );
        },
      },
      {
        name: <FormattedMessage id="project.status" />,
        sortable: true,
        minWidth: "100px",
        cell: (row) => {
          return (
            <p className="text-truncate text-bold-500 mb-0 buyProject">
              <Badge pill color="primary">
                {row.status}
              </Badge>
            </p>
          );
        },
      },
      {
        name: <FormattedMessage id="project.action" />,
        sortable: true,
        minWidth: "100px",
        cell: (row) => {
          return (
            <p className="text-truncate text-bold-500 mb-0 buyProject">
              <Icon.MoreVertical />
            </p>
          );
        },
      }]
  
  rowClick(id) {
    this.props.history.push(`/projects/${id._id}`);
  }

  filterBuyData() {
    let { project } = this.props;
    if (project.projectList.length) {
      return project.projectList.filter((item) => item.type === "buy");
    }
  }

  renderBuyData() {
    let { project, clients } = this.props;
    if (
      project.projectList.length &&
      this.props.project.projectList.filter((item) => item.type === "buy")
        .length
    ) {
      return (
        <>
          <div className="dropdown ml-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown className="buttonBtn">
              <DropdownToggle color="white" caret>
                Active
                <Icon.ChevronDown size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Not Active</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <div className={`data-list list-view buyData` }>
            <DataTable
              columns={this.columns}
              data={this.filterBuyData()}
              noHeader
              responsive
              pointerOnHover
              className={'buyProjectDataTable'}
              onRowClicked={this.rowClick.bind(this)}
              sortIcon={<Icon.ChevronDown />}
            />
          </div>
        </>
      );
    } else {
      return <NoData />;
    }
  }
  render() {
    return <div>{this.renderBuyData()}</div>;
  }
}

export default injectIntl(ProjectBuyTab);
