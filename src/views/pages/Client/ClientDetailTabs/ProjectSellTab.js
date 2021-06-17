import React, { Component } from "react";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Badge,
} from "reactstrap";
import NoData from "../../../../components/Common/nodata";
import DataTable from "react-data-table-component";
import * as Icon from "react-feather";
import { FormattedMessage, injectIntl } from "react-intl";


export class ProjectSellTab extends Component {
 columns = [
    {
      name: <FormattedMessage id="property.property" />,
      sortable: true,
      minWidth: "250px",
      cell: (row) => {
        return (
          <p title={row.property?.localisation?.address?.street} className="text-truncate text-bold-500 mb-0 buyProject">
            {row.property?.localisation?.address?.street} - {row.property?.localisation?.address?.city}
          </p>
        );
      },
    },
    {
      name:<FormattedMessage id="project.type" />,
      sortable: true,
      minWidth: "100px",
      cell: (row) => {
        return <p title= {this.props.intl.formatMessage({ id: 'project.' +row.property?.type })} className="text-truncate text-bold-500 mb-0 buyProject">
           {this.props.intl.formatMessage({ id: 'project.' +row.property?.type })}
        </p>;
      },
    },
    {
      name: <FormattedMessage id="project.price" />,
      sortable: true,
      minWidth: "100px",
      cell: (row) => {
        return <p title={row.price} className="text-truncate text-bold-500 mb-0 buyProject">
          {row.price}€
        </p>;
      },
    },
    {
      name:<FormattedMessage id="project.creation" />,
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
      name:<FormattedMessage id="project.status" />,
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
      name:<FormattedMessage id="project.action" />,
      sortable: true,
      minWidth: "100px",
      cell: (row) => {
        return (
          <p className="text-truncate text-bold-500 mb-0 buyProject">
            <Icon.MoreVertical />
          </p>
        );
      },
    },
  ];
  rowClick(id) {
    this.props.history.push(`/projectsSell/${id._id}`);
  }
  filterSellData() {
    let { project } = this.props;
    if (project.projectList.length) {
      return project.projectList.filter((item) => item.type === "sell");
    }
  }
  renderBuyData() {
    let { project, clients } = this.props;
    if (
      project.projectList.length &&
      this.props.project.projectList.filter((item) => item.type === "sell")
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

          <div className={`data-list list-view buyData`}>
            <DataTable
              columns={this.columns}
              data={this.filterSellData()}
              noHeader
              responsive
              pointerOnHover
              className={'buyProjectDataTable'}
              sortIcon={<Icon.ChevronDown />}
              onRowClicked={this.rowClick.bind(this)}
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

export default  injectIntl(ProjectSellTab);
