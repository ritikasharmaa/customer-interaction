import React, { Component } from "react";
import { connect } from "react-redux";
import OwnBreadcrumb from "../../../components/OwnBreadcrumb/OwnBreadcrumb";
import { FormattedMessage } from "react-intl";
import * as Icon from "react-feather";
import { Button, Card, Row, Col, CardBody } from "reactstrap";
import OwnModal from "../../../components/OwnModal/OwnModal";
import UserForm from "./form"
export class userDetail extends Component {
  componentDidMount() {
    const userId = this.props.match.params._id;
    this.props.apiGetUsersData(userId);
  }
  getLinks() {
    let { user } = this.props;
    if (user.detail) {
      return [
        {
          link: "/users",
          render: <Icon.User />,
        },
        {
          render: user.detail.full_name,
        },
      ];
    }
  }
  onSave(){
    this.props.apiSaveAgencies(this.props.user.userForm)
  }
  toggleUserModal() {
    this.props.toggleUserModal();
  }
  render() {
    const { user, agencies } = this.props;
    return (
      <div>
        <div className="detailTopSec">
          <Row>
            <Col sm="2">
              <h1 className="client">
                <FormattedMessage id="user.users" defaultMessage="Clients" />
              </h1>
            </Col>
            <Col sm="4">
              <OwnBreadcrumb links={this.getLinks()} />
            </Col>
            <Col sm="6">
              <div className="rightBtnsCon">
              {/* <Button
                  color="primary"
                >
                  {" "}
                  <Icon.Plus size={15} />
                  <FormattedMessage id="agency.addNew" defaultMessage="Client" />{" "}
                </Button> */}
                <Button color="white" className="relief-light"  onClick={this.toggleUserModal.bind(this)}>
                  {" "}
                  <Icon.Edit2 size={14} className="mr-50" />
                  <FormattedMessage
                    id="user.editAgency"
                    defaultMessage="Client"
                  />{" "}
                </Button>
              </div>{" "}
            </Col>
          </Row>
        </div>
        <div className="userInfo">
          <Card>
            <h4 className="user">
              <FormattedMessage id="user.users" defaultMessage="Clients" />
            </h4>
            <Row>
              <Col>
                <CardBody className="marginLeft">
                  <div className="contactDetail">
                    <Col xs="2">
                      <h6>
                        {" "}
                        <FormattedMessage
                          id="user.fullname"
                          defaultMessage="Clients"
                        />
                      </h6>
                    </Col>
                    <Col xs="8">
                      <span>{user.detail?.full_name}</span>
                    </Col>
                  </div>
                  <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="user.email"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{user.detail.email}</span>
                      </Col>
                    </div>
                    <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="user.agency"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{user.detail?.agency}</span>
                      </Col>
                    </div>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </div>
        <OwnModal
              isOpen={agencies.isModalOpen}
              toggleModal={this.toggleUserModal.bind(this)}
              heading={
                <FormattedMessage id="agency.agency" defaultMessage="Client" />
              }
              isSaving={agencies.isSaving}
              onSave={this.onSave.bind(this)}
            >
              <UserForm
               user={user}
                agencies={agencies}
                userForm={user.userForm}
                onChange={this.props.onChangeFormUser}
              />
            </OwnModal>
      </div>
    );
  }
}

export default userDetail;
