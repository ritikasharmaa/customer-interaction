import React from "react";
import * as Icon from "react-feather";
import OwnBreadcrumb from "../../../components/OwnBreadcrumb/OwnBreadcrumb";
import DetailBox from "../../../components/Client/DetailBox";
import RightSection from "../../../components/Client/RightSection";
import { FormattedMessage } from "react-intl";
import { ClientDetailTabs } from "./ClientDetailTabs/index";
import swal from "sweetalert";

class ClientDetail extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.apiGetClientData(userId);
    this.props.apiGetProjects(userId);
  }

  editClient() {
    let clientData = JSON.parse(JSON.stringify(this.props.client.detail));
    clientData.address = this.props.client.detail.address.address;
    clientData.postcode = this.props.client.detail.address.postcode;
    clientData.city = this.props.client.detail.address.city;
    clientData.country = this.props.client.detail.address.country;

    this.props.editClient(clientData);
  }

  deleteClient() {
    const userId = this.props.match.params.id;
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.props.apiDeleteData(userId);
        swal("Client has been deleted.", {
          icon: "success",
        });
        this.props.history.push('/clients')
      } else {
        //swal("Your imaginary file is safe!");
      }
    });
  }

  getLinks() {
    let { client } = this.props;
    if (client.detail.name) {
      return [
        {
          link: "/clients",
          render: <Icon.User />,
        },
        {
          render: client.detail.name + " " + client.detail.surname,
        },
      ];
    }
  }

  render() {
    let { client } = this.props;
    return (
      <React.Fragment>
        <div className="detailTopSec">
          <h1 className="client">Client</h1>
          <OwnBreadcrumb links={this.getLinks()} />
          <RightSection
            onEdit={this.editClient.bind(this)}
            onDelete={this.deleteClient.bind(this)}
            wrap={true}
          />
        </div>
        <DetailBox detail={client.detail}
          wrap={true} />
        <div className="detailTabCon">
          <ClientDetailTabs {...this.props}
            wrap={true} />
        </div>
      </React.Fragment>
    );
  }
}

export default ClientDetail;
