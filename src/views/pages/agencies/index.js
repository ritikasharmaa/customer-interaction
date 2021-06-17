import React, { Component } from "react";
import DataTable from "react-data-table-component";
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
import { Agencycolumns } from "../../../redux/Constants";
import OwnModal from "../../../components/OwnModal/OwnModal";
import { AgenciesForm } from "./AgenciesForm";

const SortIcon = () => { return <Icon.ArrowDown />; };

export class Agencies extends Component {
  componentDidMount() {
    this.props.apiGetAgencies();
    this.props.apiGetUsers();
  }

  getLinks() {
    return [
      {
        link: "/agencies",
        render: <Icon.Users />,
      },
    ];
  }
  data() {
    let { agencies } = this.props;
    if (!agencies.agenciesList.length) {
      return [];
    } else {
      return agencies.agenciesList;
    }
  }
  toggleAgenciesModal() {
    this.props.toggleAgenciesModal();
  }
  onSave(){
    this.props.apiSaveAgencies(this.props.agencies.agenciesForm)
  }
  agency() {
    let { agencies } = this.props;
    if (agencies.agenciesList.length == 0 || agencies.agenciesList.length == 1) {
      return <div>{agencies.agenciesList && agencies.agenciesList.length} <FormattedMessage id="agency.agency" defaultMessage="Client" /></div>;
    } else {
      return <div>{agencies.agenciesList && agencies.agenciesList.length} <FormattedMessage id="agency.agencies" defaultMessage="Client" /></div>;
    }
  }
  onRowClicked(event){
    console.log(event)
    this.props.history.push(`/agencies/${event._id}`)
  }
  render() {
    const { agencies, user } = this.props;
    console.log(this.props, "agency");
    return (
      <div>
        <Card>
          <CardBody>
            <div className="detailTopSec">
              <h1 className="client">
                <FormattedMessage id="agency.agency" defaultMessage="Clients" />
              </h1>
              <OwnBreadcrumb links={this.getLinks()} />
              <div className="rightBtnsCon">
                <Button
                  color="primary"
                  onClick={this.toggleAgenciesModal.bind(this)}
                >
                  {" "}
                  <Icon.Plus size={15} />
                  <FormattedMessage id="agency.addNew" defaultMessage="Client" />{" "}
                </Button>
              
              </div>
            </div>
            <div className="subDetailCon">
              <ul>
                <li>{this.agency()}</li>
              </ul>
            </div>

            <DataTable
              className="userAgency"
              sortIcon={<SortIcon />}
              data={this.data()}
              columns={Agencycolumns}
              defaultPageSize={10}
              noHeader
              pagination
              onRowClicked={this.onRowClicked.bind(this)}
            />
            <OwnModal
              isOpen={agencies.isModalOpen}
              toggleModal={this.toggleAgenciesModal.bind(this)}
              heading={
                <FormattedMessage id="agency.agency" defaultMessage="Client" />
              }
              isSaving={agencies.isSaving}
              onSave={this.onSave.bind(this)}
            >
              <AgenciesForm
                user={user}
                agencies={agencies}
                agenciesForm={agencies.agenciesForm}
                onChange={this.props.onChangeFormAgencies}
                editAgencies={false}
              />
            </OwnModal>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Agencies;
